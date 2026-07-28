import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about CHUBZ MOTORS vehicle sales, chauffeur services, self-drive hire, airport transfers and CHUBZ DETAILZ.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Can't find what you need? Send it through the contact form and we'll answer directly."
      />

      <section className="py-16 md:py-20">
        <Container>
          <FaqAccordion items={faqs} />
        </Container>
      </section>
    </>
  );
}
