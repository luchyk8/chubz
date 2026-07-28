import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { getHomepageGalleryItems } from "@/lib/data/gallery";

const spanClasses: Record<string, string> = {
  wide: "col-span-2",
  tall: "row-span-2",
  normal: "",
};

export function GalleryPreview() {
  const items = getHomepageGalleryItems();

  return (
    <section className="border-b border-ink-line py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <PlateTag>Selected Work</PlateTag>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              The CHUBZ portfolio.
            </h2>
          </div>
          <Button href="/gallery" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
            View Full Gallery
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 auto-rows-[160px] gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 50}
              className={`relative overflow-hidden rounded-sm ${spanClasses[item.span ?? "normal"]}`}
            >
              <div className="group relative h-full w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
