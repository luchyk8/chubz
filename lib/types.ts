export type BodyType =
  | "Supercar"
  | "Convertible"
  | "Saloon"
  | "SUV"
  | "Hatchback";

export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric";

export type Transmission = "Automatic" | "Manual";

export type Availability = "Available" | "Sold" | "Coming Soon";

export interface VehicleImage {
  src: string;
  alt: string;
}

export interface Vehicle {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number | null;
  bodyType: BodyType;
  fuelType: FuelType;
  transmission: Transmission;
  mileage: number | null;
  engine: string | null;
  price: number | null;
  availability: Availability;
  images: VehicleImage[];
  description: string;
  /** True for every vehicle at Phase 1 — see /cars demo-content notice. */
  isDemoContent: true;
}

export type ServiceDivision =
  | "sales"
  | "chauffeur"
  | "self-drive"
  | "transfer"
  | "detailing";

export interface ServiceItem {
  id: string;
  division: ServiceDivision;
  index: string;
  title: string;
  shortDescription: string;
  href: string;
  image: VehicleImage;
}

export type GalleryCategory = "vehicle" | "chauffeur" | "detailing";

export interface GalleryItem {
  id: string;
  image: VehicleImage;
  category: GalleryCategory;
  featuredOnHomepage?: boolean;
  span?: "wide" | "tall" | "normal";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "sales" | "chauffeur" | "detailing" | "general";
}

export type EnquiryType =
  | "vehiclePurchase"
  | "chauffeur"
  | "selfDrive"
  | "airportTransfer"
  | "detailing"
  | "general";

export interface EnquiryFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}
