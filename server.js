// Local development server. Production runs on Vercel, where public/ is served
// by the CDN and api/intake.js runs as a serverless function — this file exists
// so `npm run dev` reproduces that shape locally. Both paths validate through
// lib/lead.js so they can't drift apart.
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sendLeadNotification } from "./lib/notify.js";
import { parseLead } from "./lib/lead.js";

// Only public/ is web-readable — mirroring Vercel's outputDirectory. Source and
// secrets live outside it and so can never be served.
const PUBLIC = path.join(path.dirname(fileURLToPath(import.meta.url)), "public");
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const json = (res, status, body) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
};

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

  const parsed = parseLead(body);
  if (parsed.error) return json(res, parsed.status, { error: parsed.error });

  try {
    await sendLeadNotification(parsed.lead);
  } catch (error) {
    console.error("Failed to send lead notification email", error);
    return json(res, 502, {
      error: "We couldn't submit your request. Please call us instead.",
    });
  }

  return json(res, 200, { ok: true });
}

const notFound = (res) => {
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>404 — Not found</h1><p><a href='/'>Back to PaintRite Painters</a></p>");
};

async function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let rel = urlPath === "/" ? "index.html" : urlPath.slice(1);
  if (!path.extname(rel)) rel += ".html"; // cleanUrls: /about -> about.html

  // Resolve inside public/ only — refuse anything escaping via ../ traversal.
  const file = path.resolve(PUBLIC, rel);
  if (file !== PUBLIC && !file.startsWith(PUBLIC + path.sep)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const data = await fs.readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    notFound(res);
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
  if (!process.env.ACS_CONNECTION_STRING) {
    console.warn(
      "\n  ⚠  ACS_CONNECTION_STRING not set — form submissions will fail.\n     Copy .env.example to .env.local and fill in the real value, then run: npm start\n",
    );
  }
});
