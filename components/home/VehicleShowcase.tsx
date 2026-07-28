import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlateTag } from "@/components/ui/PlateTag";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { vehicles } from "@/lib/data/vehicles";

export function VehicleShowcase() {
  const featured = vehicles.slice(0, 6);

  return (
    <section className="border-b border-ink-line py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <PlateTag>Vehicle Sales</PlateTag>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
                Supercars to daily drivers.
              </h2>
              <p className="mt-4 max-w-lg text-paper-dim">
                A cross-section of what passes through CHUBZ MOTORS — enquire
                for current availability and pricing on any vehicle.
              </p>
            </div>
            <Button href="/cars" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
              View All Vehicles
            </Button>
          </div>
        </Reveal>
      </Container>

      <div className="mt-12 overflow-x-auto no-scrollbar">
        <div className="flex gap-5 px-6 md:px-10" style={{ width: "max-content" }}>
          {featured.map((vehicle, i) => (
            <Reveal key={vehicle.id} delay={i * 60} className="w-[78vw] max-w-[340px] sm:w-[340px]">
              <VehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
