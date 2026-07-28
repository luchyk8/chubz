import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { DetailzHero } from "@/components/detailz/DetailzHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { detailingServices } from "@/lib/data/services";
import { galleryItems } from "@/lib/data/gallery";
import { CONFIRMED_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CHUBZ DETAILZ — Mobile Detailing",
  description:
    "CHUBZ DETAILZ mobile detailing: maintenance wash, interior detail, machine polish, paint correction and ceramic coating for every kind of vehicle in London.",
};

const processSteps = [
  { title: "Enquire", description: "Send your vehicle and the service you're after through the quote form." },
  { title: "Assessment", description: "We confirm scope, timing and a tailored quote based on condition." },
  { title: "Service", description: "Work is carried out to the same standard, whatever you drive." },
  { title: "Handover", description: "A finished vehicle, checked over before we hand back the keys." },
];

const detailingGallery = galleryItems.filter((item) => item.category === "detailing" || item.category === "vehicle").slice(0, 8);

export default function DetailzPage() {
  return (
    <>
      <DetailzHero />

      <section className="border-b border-ink-line py-20 md:py-28">
        <Container>
          <Reveal>
            <PlateTag>Services</PlateTag>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              Every service, one standard of care.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
            {detailingServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 50} className="bg-ink-raised p-7">
                <span className="font-mono text-xs text-paper-faint">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-paper-dim">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-line py-20 md:py-28">
        <Container>
          <Reveal>
            <PlateTag tone="white">Process</PlateTag>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              How a detail works.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <span className="font-mono text-3xl font-bold text-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-paper-dim">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-line py-20 md:py-28">
        <Container>
          <Reveal className="flex items-end justify-between">
            <div>
              <PlateTag>Gallery</PlateTag>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
                Everyday cars. Premium cars.
                <br />
                Same care.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {detailingGallery.map((item, i) => (
              <Reveal
                key={item.id}
                delay={i * 40}
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="quote" className="scroll-mt-24 py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <PlateTag tone="white">Get In Touch</PlateTag>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              Request a detailing quote.
            </h2>
            <p className="mt-5 max-w-md text-paper-dim md:text-lg">
              Every quote is tailored to your vehicle and its condition.
              Send us the details and we&apos;ll come back with a price.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={CONFIRMED_CONTACT.detailzPhoneHref}
                className="inline-flex items-center gap-3 text-paper hover:text-red transition-colors"
              >
                <Phone size={18} /> {CONFIRMED_CONTACT.detailzPhone}
              </a>
              <a
                href={CONFIRMED_CONTACT.detailzWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-paper hover:text-red transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp CHUBZ DETAILZ
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-sm border border-ink-line bg-ink-raised p-6 md:p-8">
              <EnquiryForm enquiryType="detailing" compact />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
