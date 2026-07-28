import type { EnquiryType } from "@/lib/types";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "time" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  half?: boolean;
};

export const ENQUIRY_LABELS: Record<EnquiryType, string> = {
  vehiclePurchase: "Vehicle Enquiry",
  chauffeur: "Chauffeur Enquiry",
  selfDrive: "Self-Drive Enquiry",
  airportTransfer: "Airport Transfer Quote",
  detailing: "Detailing Quote",
  general: "General Enquiry",
};

export const ENQUIRY_FIELDS: Record<EnquiryType, FieldConfig[]> = {
  vehiclePurchase: [
    { name: "name", label: "Name", type: "text", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    { name: "email", label: "Email", type: "email", half: true },
    { name: "vehicleOfInterest", label: "Vehicle of interest", type: "text", half: true },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us what you're looking for…" },
  ],
  chauffeur: [
    { name: "name", label: "Name", type: "text", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    { name: "email", label: "Email", type: "email", half: true },
    { name: "passengers", label: "Passengers", type: "text", half: true },
    { name: "pickup", label: "Pickup location", type: "text", required: true, half: true },
    { name: "destination", label: "Destination", type: "text", required: true, half: true },
    { name: "date", label: "Date", type: "date", required: true, half: true },
    { name: "time", label: "Time", type: "time", half: true },
    { name: "vehiclePreference", label: "Vehicle preference", type: "text", half: true },
    { name: "driverPreference", label: "Driver preference", type: "select", options: ["No preference", "Male driver", "Female driver"], half: true },
    { name: "message", label: "Anything else?", type: "textarea" },
  ],
  selfDrive: [
    { name: "name", label: "Name", type: "text", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    { name: "email", label: "Email", type: "email", half: true },
    { name: "vehicleOfInterest", label: "Vehicle of interest", type: "text", half: true },
    { name: "dates", label: "Dates needed", type: "text", required: true, placeholder: "e.g. 14–16 August", half: true },
    { name: "driverAge", label: "Driver age", type: "text", half: true },
    { name: "licenceDuration", label: "Licence held for", type: "text", half: true, placeholder: "e.g. 4 years" },
    { name: "message", label: "Anything else?", type: "textarea" },
  ],
  airportTransfer: [
    { name: "name", label: "Name", type: "text", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    { name: "email", label: "Email", type: "email", half: true },
    { name: "passengers", label: "Passengers", type: "text", half: true },
    { name: "pickup", label: "Pickup location", type: "text", required: true, half: true },
    { name: "airport", label: "Airport", type: "select", required: true, half: true, options: ["Heathrow", "Gatwick", "Stansted", "Luton", "London City", "Southend", "Other"] },
    { name: "date", label: "Date", type: "date", required: true, half: true },
    { name: "time", label: "Time", type: "time", required: true, half: true },
    { name: "flightNumber", label: "Flight number", type: "text", half: true },
    { name: "vehiclePreference", label: "Vehicle preference", type: "text", half: true },
    { name: "message", label: "Anything else?", type: "textarea" },
  ],
  detailing: [
    { name: "name", label: "Name", type: "text", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    { name: "email", label: "Email", type: "email", half: true },
    { name: "location", label: "Location", type: "text", half: true },
    { name: "vehicle", label: "Vehicle make/model", type: "text", required: true, half: true },
    {
      name: "service",
      label: "Service required",
      type: "select",
      required: true,
      half: true,
      options: [
        "Maintenance Wash",
        "Interior Detail",
        "Machine Polish",
        "Paint Correction",
        "Ceramic Coating",
        "Not sure — advise me",
      ],
    },
    { name: "message", label: "Anything else?", type: "textarea" },
  ],
  general: [
    { name: "name", label: "Name", type: "text", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    { name: "email", label: "Email", type: "email", half: true },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "How can we help?" },
  ],
};
