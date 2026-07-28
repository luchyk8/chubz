// Central place for anything that must stay consistent sitewide.
// IMPORTANT: only include facts confirmed from the business's Instagram
// accounts. Everything else routes through an enquiry, not an invented
// contact detail. See the Strategy Brief / UI-UX Spec "must confirm" lists.

export const SITE = {
  name: "CHUBZ MOTORS",
  legalName: "CHUBZ MOTORS™",
  tagline: "Premium automotive experiences, from the driveway to the destination.",
  url: "https://chubzmotors.co.uk", // placeholder production domain
  established: "2022",
  location: "London, UK",
} as const;

export const INSTAGRAM = {
  motors: {
    handle: "@chubz.motors",
    url: "https://www.instagram.com/chubz.motors?igsh=MTZ4aXFiMHpkdWx5OA==",
  },
  detailz: {
    handle: "@chubz.detailz",
    url: "https://www.instagram.com/chubz.detailz?igsh=NHl5OWRxaGNldnl6",
  },
} as const;

// The only publicly confirmed phone number across both accounts —
// listed in the @chubz.detailz Instagram bio. Do not invent a separate
// general office number; route general enquiries to the form/Instagram
// until CHUBZ MOTORS confirms a dedicated line.
export const CONFIRMED_CONTACT = {
  detailzPhone: "07760 149571",
  detailzPhoneHref: "tel:+447760149571",
  detailzWhatsappHref:
    "https://wa.me/447760149571?text=Hi%20CHUBZ%20DETAILZ%2C%20I%27d%20like%20to%20get%20a%20quote",
} as const;

export const NAV_LINKS = [
  { label: "Cars", href: "/cars" },
  { label: "Chauffeur & Hire", href: "/chauffeur-hire" },
  { label: "Detailz", href: "/detailz" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "Cars for Sale", href: "/cars" },
    { label: "Chauffeur & Hire", href: "/chauffeur-hire" },
    { label: "CHUBZ DETAILZ", href: "/detailz" },
    { label: "Gallery", href: "/gallery" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
