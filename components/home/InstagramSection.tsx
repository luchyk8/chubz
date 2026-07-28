import Image from "next/image";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { INSTAGRAM } from "@/lib/constants";

const preview = [
  { src: "/images/fleet/bmw-m4-blue.jpg", alt: "Blue BMW M4 on a London street" },
  { src: "/images/fleet/audi-r8-spyder-rear.jpg", alt: "Grey Audi R8 Spyder, rear view" },
  { src: "/images/detailing/wash-suds-process.jpg", alt: "Car covered in suds during a wash" },
  { src: "/images/fleet/vw-golf-r.jpg", alt: "Blue Volkswagen Golf R" },
];

export function InstagramSection() {
  return (
    <section className="border-b border-ink-line py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <PlateTag>Follow The Journey</PlateTag>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
            More cars. More details.
            <br />
            More CHUBZ.
          </h2>
          <p className="mt-5 max-w-md text-paper-dim md:text-lg">
            Instagram is where new arrivals, finished details and fleet
            updates land first.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={INSTAGRAM.motors.url}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={<InstagramIcon size={18} />}
            >
              Follow CHUBZ MOTORS
            </Button>
            <Button
              href={INSTAGRAM.detailz.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<InstagramIcon size={18} />}
            >
              Follow CHUBZ DETAILZ
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 gap-3">
          {preview.map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
