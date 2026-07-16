import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sendLeadNotification } from "./lib/notify.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const json = (res, status, body) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
};

const asTrimmedString = (value) =>
  typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

async function readJsonBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 64 * 1024) throw new Error("Body too large");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function handleIntake(req, res) {
  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    return json(res, 400, { error: "Invalid JSON body" });
  }

  const rawEmail = asTrimmedString(body.email)?.toLowerCase();
  const email = rawEmail && EMAIL_RE.test(rawEmail) ? rawEmail : undefined;
  const phone = asTrimmedString(body.phone);

  const lead = {
    name: asTrimmedString(body.name),
    phone,
    email,
    city: asTrimmedString(body.city),
    propertyType: asTrimmedString(body.propertyType),
    service: asTrimmedString(body.service),
    message: asTrimmedString(body.message),
  };

  // Minimum to work a lead: at least one way to reach them.
  if (!phone && !email) {
    return json(res, 400, { error: "A phone number or email is required." });
  }

  try {
    await sendLeadNotification(lead);
  } catch (error) {
    console.error("Failed to send lead notification email", error);
    return json(res, 502, {
      error: "We couldn't submit your request. Please call us instead.",
    });
  }

  return json(res, 200, { ok: true });
}

// Only these are web-public. Everything else in the project root — .env.local,
// server.js, lib/, package.json, node_modules/ — must never be served.
const PUBLIC_DIRS = ["css", "js", "images"];
const isPublic = (rel) => {
  // No dotfiles, at any depth: .env.local, .git/config, ...
  const segments = rel.split("/");
  if (segments.some((s) => s.startsWith("."))) return false;
  // A top-level page: about.html, index.html — but not server.js at the root.
  if (segments.length === 1) return segments[0].endsWith(".html");
  return PUBLIC_DIRS.includes(segments[0]);
};

async function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let rel = urlPath === "/" ? "index.html" : urlPath.slice(1);
  if (!path.extname(rel)) rel += ".html";

  // Resolve inside ROOT only — refuse anything that escapes via ../ traversal.
  const file = path.resolve(ROOT, rel);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  // Then: even inside ROOT, only serve what's explicitly public.
  if (!isPublic(path.relative(ROOT, file).split(path.sep).join("/"))) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 — Not found</h1><p><a href='/'>Back to PaintRite Painters</a></p>");
    return;
  }

  try {
    const data = await fs.readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 — Not found</h1><p><a href='/'>Back to PaintRite Painters</a></p>");
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url.split("?")[0] === "/api/intake") {
    if (req.method !== "POST") return json(res, 405, { error: "Method not allowed" });
    return handleIntake(req, res);
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    return json(res, 405, { error: "Method not allowed" });
  }
  return serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`PaintRite site running at http://localhost:${PORT}`);
  if (!process.env.ACS_CONNECTION_STRING || !process.env.ACS_SENDER_ADDRESS) {
    console.warn(
      "\n  ⚠  ACS_CONNECTION_STRING / ACS_SENDER_ADDRESS not set — form submissions will fail.\n     Copy .env.example to .env.local and fill in real values, then run: npm start\n",
    );
  }
});
