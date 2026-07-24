import { EmailClient, type EmailMessage } from "@azure/communication-email";

// A single shared client. Created lazily so a missing connection string surfaces
// as a clear runtime error at send time rather than crashing module import.
let client: EmailClient | null = null;

function getClient(): EmailClient {
  const connectionString = process.env.ACS_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error("ACS_CONNECTION_STRING is not set");
  }
  if (!client) client = new EmailClient(connectionString);
  return client;
}

// The From address. Hard-coded alongside the recipients for the same reason: it
// isn't a secret, and a deploy shouldn't be able to get it wrong. The domain must
// stay verified in the ACS resource or Azure rejects every send.
// Replies don't come back here — replyTo below points at the customer.
const SENDER_ADDRESS = "DoNotReply@notification.getcohesiveai.com";

// Lead notifications go to the PaintRite office. Hard-coded (not env-driven) so
// they can't be misconfigured in a deploy; update this list to change routing.
const NOTIFY_TO = [
  "tony@paintritepainters.com",
  "admin@paintritepainters.com",
];
const NOTIFY_BCC = [
  "nam@cohesiveapp.com",
  "kevin@cohesiveapp.com",
];

export type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  propertyType?: string;
  service?: string;
  message?: string;
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildBody(lead: Lead) {
  const rows: [string, string | undefined][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["City", lead.city],
    ["Property type", lead.propertyType],
    ["Service", lead.service],
    ["Details", lead.message],
  ];

  const plain = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#14181f;max-width:560px;margin:0 auto">
      <div style="background:#0e1c47;padding:20px 24px;border-radius:10px 10px 0 0">
        <div style="color:#f7df1e;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase">New Website Lead</div>
        <div style="color:#fff;font-size:20px;font-weight:800;margin-top:4px">Free Estimate Request</div>
      </div>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e3e6ec;border-top:0;border-radius:0 0 10px 10px;overflow:hidden">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v], i) => `
          <tr style="background:${i % 2 ? "#f5f7fa" : "#ffffff"}">
            <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#79808f;width:140px;vertical-align:top">${esc(k)}</td>
            <td style="padding:12px 16px;font-size:14px;color:#14181f">${esc(String(v))}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="font-size:12px;color:#94a3b8;margin-top:16px;text-align:center">
        Sent automatically from the PaintRite Painters website.
      </p>
    </div>`;

  return { plain, html };
}

// Sends the lead notification and waits for Azure to accept it. Throws on
// misconfiguration or a failed send so the caller can decide how to respond.
export async function sendLeadNotification(lead: Lead): Promise<void> {
  const { plain, html } = buildBody(lead);
  const message: EmailMessage = {
    senderAddress: SENDER_ADDRESS,
    content: {
      subject: "PaintRite Web Lead",
      plainText: plain,
      html,
    },
    recipients: {
      to: NOTIFY_TO.map((address) => ({ address })),
      ...(NOTIFY_BCC.length > 0 && {
        bcc: NOTIFY_BCC.map((address) => ({ address })),
      }),
    },
    // Let the office reply straight to the customer when an email was provided.
    replyTo: lead.email ? [{ address: lead.email }] : undefined,
  };

  const poller = await getClient().beginSend(message);
  await poller.pollUntilDone();
}
