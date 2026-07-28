import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Terms",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms" />
      <section className="py-16 md:py-20">
        <Container className="max-w-2xl">
          <div className="mb-10 rounded-sm border border-plate-yellow/30 bg-plate-yellow/10 px-5 py-4 text-sm text-paper-dim">
            Placeholder page. Vehicle sales, self-drive hire and chauffeur
            terms (deposits, cancellation policy, insurance requirements
            etc.) need to be confirmed with CHUBZ MOTORS and reviewed
            legally before launch.
          </div>

          <div className="flex flex-col gap-6 text-paper-dim leading-relaxed">
            <p>
              These terms will cover vehicle sales enquiries, self-drive
              hire conditions, chauffeur and airport transfer bookings, and
              CHUBZ DETAILZ service terms once confirmed with the business.
            </p>
            <p>
              Until finalised, treat every enquiry submitted through this
              site as non-binding — final terms are agreed directly with
              CHUBZ MOTORS or CHUBZ DETAILZ before any service is provided.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
