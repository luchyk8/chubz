import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Chauffeur, Self-Drive & Airport Transfers",
  description:
    "Private chauffeur services, self-drive vehicle hire and airport transfers across London with CHUBZ MOTORS.",
};

export default function ChauffeurHirePage() {
  return (
    <>
      <PageHeader
        eyebrow="Mobility"
        title="Chauffeur, self-drive & transfers."
        description="Three ways to move — with a driver, without one, or straight from the airport. Enquire below and we'll confirm the details."
      />

      <Section
        id="chauffeur"
        eyebrow="Chauffeur Services"
        title="Arrive without driving."
        image={{ src: "/images/fleet/mercedes-s-class-night.jpg", alt: "Black Mercedes S-Class at night, chauffeur fleet" }}
        points={[
          "Business travel, events and special occasions",
          "Male or female driver available on request",
          "Fleet presented to a premium standard throughout",
        ]}
        enquiryType="chauffeur"
      />

      <Section
        id="self-drive"
        eyebrow="Self-Drive Hire"
        title="Hire the car, keep the keys."
        image={{ src: "/images/fleet/audi-r8-spyder-front.jpg", alt: "Grey Audi R8 Spyder available for self-drive hire" }}
        points={[
          "Hire for a day, a weekend, or an occasion",
          "Driver age, licence and deposit requirements confirmed at enquiry",
          "From performance cars to something more relaxed",
        ]}
        enquiryType="selfDrive"
        reverse
      />

      <Section
        id="transfers"
        eyebrow="Airport Transfers"
        title="Pickup, drop-off, on time."
        image={{ src: "/images/fleet/range-rover-svr-front.jpg", alt: "Blue Range Rover Sport SVR used for airport transfers" }}
        points={[
          "Coverage across London — tell us your airport and we'll confirm",
          "Flight number tracking so pickup times stay accurate",
          "Quoted per journey — no fixed public pricing yet",
        ]}
        enquiryType="airportTransfer"
        last
      />
    </>
  );
}

function Section({
  id,
  eyebrow,
  title,
  image,
  points,
  enquiryType,
  reverse,
  last,
}: {
  id: string;
  eyebrow: string;
  title: string;
  image: { src: string; alt: string };
  points: string[];
  enquiryType: "chauffeur" | "selfDrive" | "airportTransfer";
  reverse?: boolean;
  last?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${!last ? "border-b border-ink-line" : ""}`}
    >
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
        <div className={reverse ? "lg:order-2" : ""}>
          <Reveal>
            <PlateTag>{eyebrow}</PlateTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[0.95] tracking-tight sm:text-4xl">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={80} className="relative mt-8 aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={140} className="mt-8 flex flex-col gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-red" />
                <span className="text-paper-dim">{point}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={100} className={reverse ? "lg:order-1" : ""}>
          <div className="rounded-sm border border-ink-line bg-ink-raised p-6 md:p-8 lg:sticky lg:top-28">
            <EnquiryForm enquiryType={enquiryType} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
