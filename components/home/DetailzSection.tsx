import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { detailingServices } from "@/lib/data/services";

export function DetailzSection() {
  return (
    <section className="border-b border-ink-line py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col justify-center">
          <Reveal>
            <PlateTag tone="white">CHUBZ Detailz</PlateTag>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              Show condition, every time.
            </h2>
            <p className="mt-5 max-w-md text-paper-dim md:text-lg">
              Professional mobile detailing for everyday, premium and
              performance vehicles alike — the same standard, whatever you
              drive.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8 flex flex-wrap gap-2">
            {detailingServices.map((service) => (
              <span
                key={service.id}
                className="rounded-full border border-ink-line-strong px-3.5 py-1.5 text-xs text-paper-dim"
              >
                {service.title}
              </span>
            ))}
          </Reveal>

          <Reveal delay={180} className="mt-10">
            <Button href="/detailz" size="lg" icon={<ArrowRight size={18} />}>
              Get a Quote
            </Button>
          </Reveal>
        </div>

        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto">
          <Image
            src="/images/detailing/wheel-detail-closeup.jpg"
            alt="Close-up detail of a freshly cleaned alloy wheel"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
