import { sendLeadNotification } from "../lib/notify.js";
import { parseLead } from "../lib/lead.js";

// Node runtime (not Edge): the Azure Communication Email SDK isn't Edge-compatible.
export const config = { runtime: "nodejs" };

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Vercel parses JSON bodies, but tolerate a raw string too.
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid JSON body" });
    }
  }

  const parsed = parseLead(body);
  if (parsed.error) return res.status(parsed.status).json({ error: parsed.error });

  try {
    await sendLeadNotification(parsed.lead);
  } catch (error) {
    console.error("Failed to send lead notification email", error);
    return res.status(502).json({
      error: "We couldn't submit your request. Please call us instead.",
    });
  }

  return res.status(200).json({ ok: true });
}
