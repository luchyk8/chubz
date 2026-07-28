import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { EnquirySwitcher } from "@/components/forms/EnquirySwitcher";
import { INSTAGRAM, CONFIRMED_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CHUBZ MOTORS for vehicle sales, chauffeur services, self-drive hire, airport transfers or CHUBZ DETAILZ mobile detailing.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you need."
        description="Pick the service below and send us a few details — we'll come back to you directly."
      />

      <section className="py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <EnquirySwitcher />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <div className="rounded-sm border border-ink-line bg-ink-raised p-6">
              <h3 className="plate-tag text-xs text-paper-faint">Direct Contact</h3>
              <a
                href={CONFIRMED_CONTACT.detailzPhoneHref}
                className="mt-4 flex items-center gap-3 text-paper hover:text-red transition-colors"
              >
                <Phone size={18} /> {CONFIRMED_CONTACT.detailzPhone}
              </a>
              <a
                href={CONFIRMED_CONTACT.detailzWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 text-paper hover:text-red transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp CHUBZ DETAILZ
              </a>
              <p className="mt-4 text-xs text-paper-faint">
                This is CHUBZ DETAILZ&apos;s direct line. For vehicle sales,
                chauffeur or general enquiries, the form is the fastest
                route.
              </p>
            </div>

            <div className="rounded-sm border border-ink-line bg-ink-raised p-6">
              <h3 className="plate-tag text-xs text-paper-faint">Instagram</h3>
              <a
                href={INSTAGRAM.motors.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 text-paper hover:text-red transition-colors"
              >
                <InstagramIcon size={18} /> {INSTAGRAM.motors.handle}
              </a>
              <a
                href={INSTAGRAM.detailz.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 text-paper hover:text-red transition-colors"
              >
                <InstagramIcon size={18} /> {INSTAGRAM.detailz.handle}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
