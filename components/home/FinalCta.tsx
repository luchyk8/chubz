import { ArrowRight, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { INSTAGRAM, CONFIRMED_CONTACT } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-deep via-ink to-ink py-24 md:py-32">
      <Container className="relative flex flex-col items-start gap-8">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Ready to get started?
          </h2>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap items-center gap-4">
          <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
            Enquire Now
          </Button>
          <Button
            href={CONFIRMED_CONTACT.detailzWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            icon={<Phone size={18} />}
          >
            WhatsApp
          </Button>
          <Button
            href={INSTAGRAM.motors.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            icon={<InstagramIcon size={18} />}
          >
            Instagram
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
