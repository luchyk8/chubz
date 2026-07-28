import type { GalleryItem } from "@/lib/types";

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image: { src: "/images/fleet/ferrari-portofino-wash.jpg", alt: "Black Ferrari Portofino on a London street" },
    category: "vehicle",
    featuredOnHomepage: true,
    span: "tall",
  },
  {
    id: "g2",
    image: { src: "/images/fleet/audi-r8-spyder-rear.jpg", alt: "Grey Audi R8 Spyder, rear three-quarter view" },
    category: "vehicle",
    featuredOnHomepage: true,
  },
  {
    id: "g3",
    image: { src: "/images/fleet/bmw-m4-blue.jpg", alt: "Blue BMW M4 parked on a London street" },
    category: "vehicle",
    span: "wide",
  },
  {
    id: "g4",
    image: { src: "/images/detailing/wheel-detail-closeup.jpg", alt: "Close-up detail of a freshly cleaned alloy wheel" },
    category: "detailing",
    featuredOnHomepage: true,
  },
  {
    id: "g5",
    image: { src: "/images/fleet/audi-rs5-front.jpg", alt: "Grey Audi RS5 Sportback, front view" },
    category: "vehicle",
  },
  {
    id: "g6",
    image: { src: "/images/detailing/wash-suds-process.jpg", alt: "Car covered in suds during a CHUBZ DETAILZ wash" },
    category: "detailing",
    featuredOnHomepage: true,
  },
  {
    id: "g7",
    image: { src: "/images/fleet/range-rover-svr-front.jpg", alt: "Blue Range Rover Sport SVR, front view" },
    category: "vehicle",
    span: "tall",
  },
  {
    id: "g8",
    image: { src: "/images/fleet/mercedes-s-class-night.jpg", alt: "Black Mercedes S-Class at night" },
    category: "chauffeur",
    featuredOnHomepage: true,
  },
  {
    id: "g9",
    image: { src: "/images/detailing/detailing-process-bw.jpg", alt: "Close-up of an Audi being washed, black and white" },
    category: "detailing",
    span: "wide",
  },
  {
    id: "g10",
    image: { src: "/images/fleet/audi-rs5-rear.jpg", alt: "Grey Audi RS5 Sportback, rear view" },
    category: "vehicle",
  },
  {
    id: "g11",
    image: { src: "/images/fleet/mercedes-c-class-amg.jpg", alt: "Blue Mercedes C-Class AMG Line coupe" },
    category: "vehicle",
  },
  {
    id: "g12",
    image: { src: "/images/fleet/range-rover-svr-interior.jpg", alt: "Range Rover interior and steering wheel" },
    category: "vehicle",
  },
  {
    id: "g13",
    image: { src: "/images/fleet/mercedes-a-class-front.jpg", alt: "Black Mercedes A-Class, front view" },
    category: "vehicle",
  },
  {
    id: "g14",
    image: { src: "/images/fleet/vw-golf-r.jpg", alt: "Blue Volkswagen Golf R on a residential London street" },
    category: "vehicle",
    span: "wide",
  },
  {
    id: "g15",
    image: { src: "/images/fleet/audi-r8-spyder-front.jpg", alt: "Grey Audi R8 Spyder, front three-quarter view" },
    category: "vehicle",
  },
  {
    id: "g16",
    image: { src: "/images/fleet/mercedes-a-class-interior.jpg", alt: "Mercedes A-Class interior and dashboard" },
    category: "vehicle",
  },
];

export function getHomepageGalleryItems() {
  return galleryItems.filter((item) => item.featuredOnHomepage);
}
