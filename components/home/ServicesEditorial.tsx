import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

export function ServicesEditorial() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-ink-line py-24 md:py-32">
      <Container>
        <Reveal>
          <PlateTag>What We Do</PlateTag>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Five services. One standard.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <Link
                href={service.href}
                className="group grid grid-cols-1 items-center gap-6 border-t border-ink-line py-8 last:border-b md:grid-cols-12 md:gap-8 md:py-10"
              >
                <span className="font-mono text-sm text-paper-faint md:col-span-1">
                  {service.index}
                </span>

                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-red md:text-4xl">
                    {service.title}
                  </h3>
                </div>

                <p className="text-paper-dim md:col-span-5 md:text-lg">
                  {service.shortDescription}
                </p>

                <div className="relative flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                  <div className="relative hidden h-14 w-20 shrink-0 overflow-hidden rounded-sm sm:block">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="80px"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-paper-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
