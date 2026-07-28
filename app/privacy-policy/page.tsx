import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 md:py-20">
        <Container className="prose prose-invert max-w-2xl">
          <div className="mb-10 rounded-sm border border-plate-yellow/30 bg-plate-yellow/10 px-5 py-4 text-sm text-paper-dim">
            Placeholder page. This template needs to be reviewed and
            completed with CHUBZ MOTORS&apos; actual data-handling practices
            before launch — ideally with legal input.
          </div>

          <div className="flex flex-col gap-6 text-paper-dim leading-relaxed">
            <p>
              CHUBZ MOTORS collects the information submitted through our
              enquiry forms — such as name, phone number, email address and
              the details of your enquiry — solely to respond to your
              request and provide the service you&apos;ve asked about.
            </p>
            <p>
              We do not sell your information to third parties. Information
              submitted through this site is used only to contact you about
              your enquiry.
            </p>
            <p>
              If you have questions about your data, or would like it
              removed, contact us through the enquiry form and we&apos;ll
              action your request.
            </p>
            <p className="text-sm text-paper-faint">
              This page will be replaced with a full policy confirmed with
              the business owner before the site goes live.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
