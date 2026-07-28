import type { Vehicle } from "@/lib/types";

// DEMO CONTENT — for design/portfolio purposes only.
// Every vehicle here uses real photography supplied by CHUBZ MOTORS, but
// no price, mileage, year or spec is claimed as verified fact. Availability
// is always "Coming Soon" pending real inventory. Replace this file with a
// CMS-driven feed once the business confirms actual stock (see Phase 2 in
// the UI/UX Specification).

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    slug: "ferrari-portofino",
    make: "Ferrari",
    model: "Portofino",
    year: null,
    bodyType: "Convertible",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: "3.9L V8 Twin-Turbo",
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/ferrari-portofino-wash.jpg", alt: "Black Ferrari Portofino parked on a London street" },
    ],
    description:
      "A grand tourer that works as hard on the motorway as it does outside a restaurant on Kings Road. Full history and condition available on enquiry.",
    isDemoContent: true,
  },
  {
    id: "v2",
    slug: "audi-r8-spyder",
    make: "Audi",
    model: "R8 Spyder",
    year: null,
    bodyType: "Convertible",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: "5.2L V10",
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/audi-r8-spyder-front.jpg", alt: "Grey Audi R8 Spyder, roof down, front three-quarter view" },
      { src: "/images/fleet/audi-r8-spyder-rear.jpg", alt: "Grey Audi R8 Spyder, rear view with roof down" },
    ],
    description:
      "Naturally aspirated V10 theatre with the roof down. One of the most requested cars in the CHUBZ line-up — enquire for current availability.",
    isDemoContent: true,
  },
  {
    id: "v3",
    slug: "audi-rs5-sportback",
    make: "Audi",
    model: "RS5 Sportback",
    year: null,
    bodyType: "Saloon",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: "2.9L V6 Twin-Turbo",
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/audi-rs5-front.jpg", alt: "Grey Audi RS5 Sportback, front view" },
      { src: "/images/fleet/audi-rs5-rear.jpg", alt: "Grey Audi RS5 Sportback, rear view" },
    ],
    description:
      "Everyday usable, genuinely quick, and finished to showroom standard. A strong option for buyers who want performance without giving up practicality.",
    isDemoContent: true,
  },
  {
    id: "v4",
    slug: "mercedes-s-class",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: null,
    bodyType: "Saloon",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: null,
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/mercedes-s-class-night.jpg", alt: "Black Mercedes S-Class at night with London skyline behind" },
    ],
    description:
      "The benchmark for chauffeur-standard comfort. Also available as part of our chauffeur fleet — see Chauffeur & Hire for booking details.",
    isDemoContent: true,
  },
  {
    id: "v5",
    slug: "range-rover-sport-svr",
    make: "Land Rover",
    model: "Range Rover Sport SVR",
    year: null,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: "5.0L Supercharged V8",
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/range-rover-svr-front.jpg", alt: "Blue Range Rover Sport SVR, front view" },
      { src: "/images/fleet/range-rover-svr-interior.jpg", alt: "Range Rover interior, steering wheel and dashboard" },
    ],
    description:
      "Supercharged V8 presence with everyday SUV usability. A favourite for clients who want performance and space in one vehicle.",
    isDemoContent: true,
  },
  {
    id: "v6",
    slug: "mercedes-c-class-amg",
    make: "Mercedes-Benz",
    model: "C-Class AMG Line",
    year: null,
    bodyType: "Saloon",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: null,
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/mercedes-c-class-amg.jpg", alt: "Blue Mercedes C-Class AMG Line coupe" },
    ],
    description:
      "Sharp, well-specced, and priced to move — a good entry point into the AMG line for buyers stepping up from a hatchback.",
    isDemoContent: true,
  },
  {
    id: "v7",
    slug: "mercedes-a-class",
    make: "Mercedes-Benz",
    model: "A-Class AMG Line",
    year: null,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: null,
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/mercedes-a-class-front.jpg", alt: "Black Mercedes A-Class, front view" },
      { src: "/images/fleet/mercedes-a-class-interior.jpg", alt: "Mercedes A-Class interior, dashboard and steering wheel" },
    ],
    description:
      "Premium hatchback territory — proof that CHUBZ MOTORS isn't only about supercars. A well-kept, city-friendly option.",
    isDemoContent: true,
  },
  {
    id: "v8",
    slug: "volkswagen-golf-r",
    make: "Volkswagen",
    model: "Golf R",
    year: null,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: null,
    engine: "2.0L Turbo, 4Motion",
    price: null,
    availability: "Coming Soon",
    images: [
      { src: "/images/fleet/vw-golf-r.jpg", alt: "Blue Volkswagen Golf R parked on a residential London street" },
    ],
    description:
      "Understated on the outside, genuinely fast underneath. A regular favourite among CHUBZ DETAILZ clients as much as buyers.",
    isDemoContent: true,
  },
];

export function getVehicleBySlug(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}

export function getRelatedVehicles(slug: string, count = 3) {
  const others = vehicles.filter((v) => v.slug !== slug);
  return others.slice(0, count);
}
