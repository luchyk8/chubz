"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlateTag } from "@/components/ui/PlateTag";

export function DetailzHero() {
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Reading a browser media query is only possible after mount (SSR has
    // no window), so this genuinely needs an effect rather than derived state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMotionOk(!query.matches);
  }, []);

  return (
    <section className="relative h-[80svh] min-h-[480px] w-full overflow-hidden bg-ink">
      {motionOk ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/detailing/detailing-jetwash-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/detailing-jetwash.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/images/detailing/detailing-jetwash-poster.jpg"
          alt="Car being jet washed as part of a CHUBZ DETAILZ maintenance wash"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <Container className="relative z-10 flex h-full flex-col justify-end pb-16 pt-32">
        <PlateTag tone="white">CHUBZ Detailz</PlateTag>
        <h1 className="mt-5 max-w-2xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          Mobile Detailing &amp; Vehicle Care
        </h1>
        <p className="mt-5 max-w-lg text-paper-dim md:text-lg">
          Professional mobile detailing for everyday, premium and
          performance vehicles — the same standard, whatever you drive.
        </p>
        <div className="mt-8">
          <Button href="#quote" size="lg" icon={<ArrowRight size={18} />}>
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
