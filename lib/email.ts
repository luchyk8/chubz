import { ENQUIRY_FIELDS, ENQUIRY_LABELS } from "@/lib/data/enquiryFields";
import type { EnquiryType } from "@/lib/types";

// Pure, side-effect-free content builder — kept separate from lib/actions.ts
// so the email formatting can be reasoned about (and tested) independently
// of the Resend API call itself.

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const LONDON_TIME_FORMAT: Intl.DateTimeFormatOptions = {
  timeZone: "Europe/London",
  dateStyle: "medium",
  timeStyle: "short",
};

export function buildEnquiryEmail(
  enquiryType: EnquiryType,
  entries: Record<string, string>
) {
  const fields = ENQUIRY_FIELDS[enquiryType];
  const typeLabel = ENQUIRY_LABELS[enquiryType];
  const submittedAt = new Date().toLocaleString("en-GB", LONDON_TIME_FORMAT);

  // Walk the field config in its defined order so the email always shows
  // enquiry type, name, contact details, then the vehicle/service-specific
  // fields, then any message — skipping fields the visitor left blank.
  const rows = fields
    .map((field) => ({ field, value: entries[field.name]?.trim() ?? "" }))
    .filter((row) => row.value.length > 0);

  const customerName =
    rows.find((row) => row.field.name === "name")?.value ?? "Website visitor";

  const subject = `New ${typeLabel} — ${customerName}`;

  const text = [
    `New ${typeLabel} — CHUBZ MOTORS website`,
    "",
    ...rows.map((row) => `${row.field.label}: ${row.value}`),
    "",
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const htmlRows = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #2a2a2d;color:#8d8d92;font-size:13px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;vertical-align:top;white-space:nowrap;">
            ${escapeHtml(row.field.label)}
          </td>
          <td style="padding:10px 16px;border-bottom:1px solid #2a2a2d;color:#f4f2ee;font-size:14px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
            ${escapeHtml(row.value).replace(/\n/g, "<br/>")}
          </td>
        </tr>`
    )
    .join("");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:32px 16px;background:#f4f2ee;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#0a0a0b;border-radius:6px;overflow:hidden;">
      <tr>
        <td style="padding:24px 24px 18px 24px;border-bottom:3px solid #d81f2a;">
          <p style="margin:0;color:#8d8d92;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
            CHUBZ MOTORS website
          </p>
          <h1 style="margin:6px 0 0 0;color:#f4f2ee;font-size:20px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
            New ${escapeHtml(typeLabel)}
          </h1>
        </td>
      </tr>
      <tr>
        <td style="padding:6px 0 0 0;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            ${htmlRows}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px 24px 24px;">
          <p style="margin:0;color:#6f6e6b;font-size:12px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
            Submitted ${escapeHtml(submittedAt)} (London time) via the CHUBZ MOTORS enquiry form.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}
