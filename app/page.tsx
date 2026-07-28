import { Hero } from "@/components/home/Hero";
import { ServicesEditorial } from "@/components/home/ServicesEditorial";
import { VehicleShowcase } from "@/components/home/VehicleShowcase";
import { MobilitySection } from "@/components/home/MobilitySection";
import { DetailzSection } from "@/components/home/DetailzSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { InstagramSection } from "@/components/home/InstagramSection";
import { FinalCta } from "@/components/home/FinalCta";
import { SITE, INSTAGRAM } from "@/lib/constants";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: SITE.legalName,
    url: SITE.url,
    areaServed: "London, UK",
    foundingDate: SITE.established,
    sameAs: [INSTAGRAM.motors.url, INSTAGRAM.detailz.url],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesEditorial />
      <VehicleShowcase />
      <MobilitySection />
      <DetailzSection />
      <GalleryPreview />
      <InstagramSection />
      <FinalCta />
    </>
  );
}
