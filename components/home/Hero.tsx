import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlateTag } from "@/components/ui/PlateTag";
import { INSTAGRAM, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/fleet/ferrari-portofino-wash.jpg"
        alt="Black Ferrari Portofino parked on a London street, freshly washed"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[65%_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      <Container className="relative z-10 flex h-full flex-col justify-end pb-20 pt-32 md:pb-28">
        <div className="hero-rise max-w-3xl" style={{ animationDelay: "80ms" }}>
          <PlateTag>{SITE.location} · Est. {SITE.established}</PlateTag>
        </div>

        <h1
          className="hero-rise mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "180ms" }}
        >
          Premium automotive
          <br />
          services in London.
        </h1>

        <p
          className="hero-rise mt-6 max-w-xl font-mono text-sm uppercase tracking-[0.18em] text-paper-dim md:text-base"
          style={{ animationDelay: "300ms" }}
        >
          Vehicles · Chauffeur · Hire · Detailing
        </p>

        <div
          className="hero-rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "420ms" }}
        >
          <Button href="#services" size="lg" icon={<ArrowRight size={18} />}>
            Explore Services
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
        </div>
      </Container>
    </section>
  );
}
