// Lead parsing/validation, shared by the Vercel function (api/intake.js) and the
// local dev server (server.js) so the two can't drift apart.

const asTrimmedString = (value) =>
  typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

/**
 * Turn an untrusted request body into a Lead.
 * @returns {{lead: object}|{error: string, status: number}}
 */
export function parseLead(body) {
  if (!body || typeof body !== "object") {
    return { error: "Invalid JSON body", status: 400 };
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
    return { error: "A phone number or email is required.", status: 400 };
  }

  return { lead };
}
