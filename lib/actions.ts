"use server";

import { Resend } from "resend";
import type { EnquiryFormState, EnquiryType } from "@/lib/types";
import { buildEnquiryEmail } from "@/lib/email";
import { ENQUIRY_RECIPIENT_EMAIL, DEFAULT_EMAIL_FROM } from "@/lib/constants";

// One shared handler for every enquiry form on the site (vehicle purchase,
// chauffeur, self-drive, airport transfer, detailing, general) — see the
// Contact / Enquiry System section of the UI/UX Specification.
//
// Submissions are emailed directly via Resend to ENQUIRY_RECIPIENT_EMAIL.
// RESEND_API_KEY is read from the server environment only — this file has
// no client boundary (it's a Server Action module), so the key is never
// sent to the browser. Do not import anything from this file into a
// Client Component other than the exported submitEnquiry function itself.

const REQUIRED: Record<EnquiryType, string[]> = {
  vehiclePurchase: ["name", "phone", "message"],
  chauffeur: ["name", "phone", "pickup", "destination", "date"],
  selfDrive: ["name", "phone", "dates"],
  airportTransfer: ["name", "phone", "pickup", "airport", "date", "time"],
  detailing: ["name", "phone", "vehicle", "service"],
  general: ["name", "phone", "message"],
};

const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
  vehicleOfInterest: "Vehicle of interest",
  pickup: "Pickup location",
  destination: "Destination",
  date: "Date",
  time: "Time",
  dates: "Dates",
  driverAge: "Driver age",
  licenceDuration: "Licence held for",
  airport: "Airport",
  flightNumber: "Flight number",
  passengers: "Passengers",
  vehiclePreference: "Vehicle preference",
  driverPreference: "Driver preference",
  vehicle: "Vehicle make/model",
  service: "Service required",
  location: "Location",
};

const GENERIC_ERROR_MESSAGE =
  "Sorry — something went wrong sending your enquiry. Please try again, or contact us directly by phone, WhatsApp or Instagram.";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitEnquiry(
  enquiryType: EnquiryType,
  _prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  const entries = Object.fromEntries(formData.entries()) as Record<
    string,
    string
  >;

  const required = REQUIRED[enquiryType] ?? REQUIRED.general;
  const fieldErrors: Record<string, string> = {};

  for (const field of required) {
    if (!entries[field] || entries[field].trim().length === 0) {
      fieldErrors[field] = `${LABELS[field] ?? field} is required`;
    }
  }

  if (entries.email && entries.email.trim() && !isEmail(entries.email)) {
    fieldErrors.email = "Enter a valid email address";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fails loudly in server logs so a missing env var in a given
    // environment (e.g. Preview without the var set) is easy to spot,
    // but the visitor still gets a clean, honest error state rather than
    // a silent "success" with nothing actually delivered.
    console.error(
      "submitEnquiry: RESEND_API_KEY is not set — enquiry email not sent."
    );
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }

  try {
    const resend = new Resend(apiKey);
    const { subject, html, text } = buildEnquiryEmail(enquiryType, entries);
    const from = process.env.RESEND_FROM_EMAIL || DEFAULT_EMAIL_FROM;
    const replyTo =
      entries.email && isEmail(entries.email) ? entries.email : undefined;

    const { error } = await resend.emails.send({
      from,
      to: ENQUIRY_RECIPIENT_EMAIL,
      subject,
      html,
      text,
      replyTo,
    });

    if (error) {
      console.error("submitEnquiry: Resend returned an error:", error);
      return { status: "error", message: GENERIC_ERROR_MESSAGE };
    }
  } catch (err) {
    console.error("submitEnquiry: unexpected error sending email:", err);
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }

  return {
    status: "success",
    message:
      "Thanks — your enquiry has been sent. We'll be in touch shortly. Prefer a faster reply? Message us on Instagram.",
  };
}
