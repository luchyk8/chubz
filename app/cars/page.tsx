import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { VehicleBrowser } from "@/components/vehicles/VehicleBrowser";
import { vehicles } from "@/lib/data/vehicles";

export const metadata: Metadata = {
  title: "Cars for Sale",
  description:
    "Browse the range of vehicles CHUBZ MOTORS works with in London, from performance cars to everyday daily drivers. Enquire for current pricing and availability.",
};

export default function CarsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vehicle Sales"
        title="Cars for sale."
        description="Enquire for current pricing, mileage and availability on any vehicle below."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-10 flex items-start gap-3 rounded-sm border border-plate-yellow/30 bg-plate-yellow/10 px-5 py-4 text-sm text-paper-dim">
            <Info size={18} className="mt-0.5 shrink-0 text-plate-yellow" />
            <p>
              These listings use real CHUBZ MOTORS photography as a demo of
              how the vehicle showcase will work. Prices, mileage and exact
              availability aren&apos;t published yet — enquire and we&apos;ll
              confirm current details directly.
            </p>
          </div>

          <VehicleBrowser vehicles={vehicles} />
        </Container>
      </section>
    </>
  );
}
