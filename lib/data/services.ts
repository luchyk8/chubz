import type { ServiceItem } from "@/lib/types";

export const services: ServiceItem[] = [
  {
    id: "sales",
    division: "sales",
    index: "01",
    title: "Vehicle Sales",
    shortDescription:
      "New and used cars, from daily drivers to genuine supercars. Enquire and we'll talk you through what's available.",
    href: "/cars",
    image: {
      src: "/images/fleet/audi-rs5-rear.jpg",
      alt: "Grey Audi RS5 Sportback parked in London",
    },
  },
  {
    id: "chauffeur",
    division: "chauffeur",
    index: "02",
    title: "Chauffeur Services",
    shortDescription:
      "Private chauffeur for business travel, events and occasions, with a driver to suit — male or female, on request.",
    href: "/chauffeur-hire#chauffeur",
    image: {
      src: "/images/fleet/mercedes-s-class-night.jpg",
      alt: "Black Mercedes S-Class at night, chauffeur fleet",
    },
  },
  {
    id: "self-drive",
    division: "self-drive",
    index: "03",
    title: "Self-Drive Hire",
    shortDescription:
      "Hire one of our vehicles for a day, a weekend, or an occasion — from performance cars to something more relaxed.",
    href: "/chauffeur-hire#self-drive",
    image: {
      src: "/images/fleet/audi-r8-spyder-front.jpg",
      alt: "Grey Audi R8 Spyder available for self-drive hire",
    },
  },
  {
    id: "transfer",
    division: "transfer",
    index: "04",
    title: "Airport Transfers",
    shortDescription:
      "Pickup and drop-off across London, timed around your flight. Tell us where you're headed and we'll quote it.",
    href: "/chauffeur-hire#transfers",
    image: {
      src: "/images/fleet/range-rover-svr-front.jpg",
      alt: "Blue Range Rover Sport SVR used for airport transfers",
    },
  },
  {
    id: "detailing",
    division: "detailing",
    index: "05",
    title: "CHUBZ DETAILZ",
    shortDescription:
      "Mobile detailing for every kind of car — maintenance washes, machine polish, paint correction and ceramic coating.",
    href: "/detailz",
    image: {
      src: "/images/detailing/wheel-detail-closeup.jpg",
      alt: "Close-up of a freshly detailed alloy wheel and wing",
    },
  },
];

export const detailingServices = [
  {
    id: "maintenance-wash",
    title: "Maintenance Wash",
    description:
      "A thorough, safe wash to keep your car looking sharp between deeper details — the one most clients book on repeat.",
  },
  {
    id: "interior-detail",
    title: "Interior Detail",
    description:
      "Deep clean for seats, carpets and trim, lifting the everyday wear that a quick vacuum never quite reaches.",
  },
  {
    id: "machine-polish",
    title: "Machine Polish",
    description:
      "Machine-applied polish to restore gloss and even out the paint's finish before protection goes on.",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description:
      "A more thorough pass to reduce swirl marks and light scratches, bringing tired paintwork back to life.",
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description:
      "A long-term protective coating that keeps paintwork glossier for longer and makes future washes easier.",
  },
] as const;
