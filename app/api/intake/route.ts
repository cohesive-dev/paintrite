import { NextResponse, type NextRequest } from "next/server";
import { sendLeadNotification, type Lead } from "@/lib/notify";

// NOTE: nothing on the site posts here right now — /contact embeds the DripJobs
// appointment form, so leads land in DripJobs and it owns the notifications.
// This route and lib/notify.ts are kept intact and working so an on-site form
// can be re-introduced (or added alongside) without rebuilding the email path.
// If DripJobs becomes the permanent single intake, delete both.

// Node runtime: the Azure Communication Email SDK is not Edge-compatible.
export const runtime = "nodejs";

type IntakePayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  propertyType?: unknown;
  service?: unknown;
  message?: unknown;
};

const asTrimmedString = (value: unknown): string | undefined =>
  typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

export async function POST(request: NextRequest) {
  let body: IntakePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const rawEmail = asTrimmedString(body.email)?.toLowerCase();
  const email = rawEmail && EMAIL_RE.test(rawEmail) ? rawEmail : undefined;
  const phone = asTrimmedString(body.phone);

  const lead: Lead = {
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
    return NextResponse.json(
      { error: "A phone number or email is required." },
      { status: 400 },
    );
  }

  try {
    await sendLeadNotification(lead);
  } catch (error) {
    console.error("Failed to send lead notification email", error);
    return NextResponse.json(
      { error: "We couldn't submit your request. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
