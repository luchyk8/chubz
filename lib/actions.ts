"use server";

import { promises as fs } from "fs";
import path from "path";
import type { EnquiryFormState, EnquiryType } from "@/lib/types";

// One shared handler for every enquiry form on the site (vehicle purchase,
// chauffeur, self-drive, airport transfer, detailing, general) — see the
// Contact / Enquiry System section of the UI/UX Specification.
//
// PHASE 1 NOTE: there is no confirmed CRM/inbox to wire this up to yet, so
// submissions are validated and appended to a local JSON Lines file. This
// keeps the form fully functional end-to-end without inventing a fake
// integration. Before real launch, replace `persistEnquiry` below with a
// real email/CRM call (e.g. Resend, HubSpot, a Google Sheet webhook) —
// everything upstream of it (validation, state, UI) will not need to change.

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

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function persistEnquiry(record: Record<string, unknown>) {
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "enquiries.jsonl");
    await fs.appendFile(file, JSON.stringify(record) + "\n", "utf8");
  } catch {
    // In read-only production environments (e.g. serverless), this write
    // may fail. That's expected at this phase — swap in a real
    // email/CRM integration before go-live rather than relying on disk.
  }
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

  await persistEnquiry({
    enquiryType,
    submittedAt: new Date().toISOString(),
    ...entries,
  });

  return {
    status: "success",
    message:
      "Thanks — your enquiry has been sent. We'll be in touch shortly. Prefer a faster reply? Message us on Instagram.",
  };
}
