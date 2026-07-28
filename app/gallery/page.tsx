import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { galleryItems } from "@/lib/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Vehicle sales, chauffeur fleet and CHUBZ DETAILZ work — a selected gallery from CHUBZ MOTORS in London.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="The CHUBZ portfolio."
        description="A curated selection across vehicle sales, chauffeur and detailing. Follow us on Instagram for the full archive."
      />

      <section className="py-16 md:py-20">
        <Container>
          <GalleryExplorer items={galleryItems} />
        </Container>
      </section>
    </>
  );
}
