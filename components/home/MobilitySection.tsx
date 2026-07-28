import Image from "next/image";
import { ArrowRight, Car, KeyRound, Plane } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    icon: Car,
    title: "Chauffeur Services",
    description:
      "Private chauffeur for business travel, events and occasions — driver preference on request.",
  },
  {
    icon: KeyRound,
    title: "Self-Drive Hire",
    description:
      "Hire one of our vehicles for a day, weekend or occasion, with requirements confirmed at enquiry.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Pickup and drop-off across London, timed around your flight number and terminal.",
  },
];

export function MobilitySection() {
  return (
    <section className="border-b border-ink-line py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
        <Reveal className="relative order-2 aspect-[4/3] overflow-hidden rounded-sm lg:order-1 lg:aspect-auto">
          <Image
            src="/images/fleet/range-rover-svr-interior.jpg"
            alt="Range Rover interior, steering wheel and dashboard"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <Reveal>
            <PlateTag>Mobility</PlateTag>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              Arrive differently.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="flex gap-4">
                <item.icon size={22} className="mt-1 shrink-0 text-red" />
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-paper-dim">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260} className="mt-10">
            <Button href="/chauffeur-hire" size="lg" icon={<ArrowRight size={18} />}>
              Request a Quote
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
