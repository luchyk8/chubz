import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { INSTAGRAM, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "CHUBZ MOTORS is a London-based automotive business covering vehicle sales, chauffeur & self-drive hire, airport transfers, and CHUBZ DETAILZ mobile detailing.",
};

const facts = [
  { label: "Established", value: SITE.established },
  { label: "Based In", value: "London, UK" },
  { label: "Service Lines", value: "5" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="One brand, several ways to move."
        description="CHUBZ MOTORS covers vehicle sales, chauffeur and self-drive hire, and airport transfers — with CHUBZ DETAILZ handling mobile vehicle care."
      />

      <section className="border-b border-ink-line py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="max-w-lg text-lg leading-relaxed text-paper-dim">
              CHUBZ MOTORS is a London-based automotive business built around
              a simple idea — that buying a car, arriving somewhere in one,
              hiring one for a day, or having one properly detailed are all
              part of the same relationship people have with their vehicles.
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-paper-dim">
              CHUBZ DETAILZ is our dedicated mobile detailing division,
              working across everyday cars and premium or performance
              vehicles alike, to the same standard.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink-line pt-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span className="font-display text-3xl font-extrabold tracking-tight text-red">
                    {fact.value}
                  </span>
                  <p className="mt-1 text-xs text-paper-faint">{fact.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Get In Touch</Button>
              <Button
                href={INSTAGRAM.motors.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<InstagramIcon size={16} />}
              >
                Follow Along
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/fleet/mercedes-c-class-amg.jpg"
              alt="Blue Mercedes C-Class AMG Line coupe"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <Reveal>
            <PlateTag>Why CHUBZ</PlateTag>
            <h2 className="mt-5 max-w-lg font-display text-3xl font-extrabold leading-[0.95] tracking-tight sm:text-4xl">
              Built on reputation, not just photos.
            </h2>
            <p className="mt-5 max-w-xl text-paper-dim">
              Everything on this site is built from real CHUBZ MOTORS and
              CHUBZ DETAILZ photography. If you want to see more of the
              day-to-day work, Instagram is the best place to look.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
