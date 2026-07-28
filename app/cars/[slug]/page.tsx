import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gauge, Fuel, Cog, Calendar, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlateTag } from "@/components/ui/PlateTag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { vehicles, getVehicleBySlug, getRelatedVehicles } from "@/lib/data/vehicles";

type Params = { slug: string };

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: "Vehicle Not Found" };

  return {
    title: `${vehicle.make} ${vehicle.model}`,
    description: vehicle.description,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const related = getRelatedVehicles(slug);

  const specs = [
    { icon: Calendar, label: "Body Type", value: vehicle.bodyType },
    { icon: Fuel, label: "Fuel", value: vehicle.fuelType },
    { icon: Cog, label: "Transmission", value: vehicle.transmission },
    {
      icon: Gauge,
      label: "Engine",
      value: vehicle.engine ?? "Enquire for details",
    },
  ];

  return (
    <div className="pt-28 md:pt-32">
      <Container>
        <Reveal>
          <PlateTag>{vehicle.availability}</PlateTag>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {vehicle.make} {vehicle.model}
          </h1>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          <div className="flex flex-col gap-10">
            <Reveal>
              <VehicleGallery images={vehicle.images} />
            </Reveal>

            <Reveal delay={80} className="flex items-start gap-3 rounded-sm border border-plate-yellow/30 bg-plate-yellow/10 px-5 py-4 text-sm text-paper-dim">
              <Info size={18} className="mt-0.5 shrink-0 text-plate-yellow" />
              <p>
                This listing uses real CHUBZ MOTORS photography for
                demonstration. Price, mileage and exact specification aren&apos;t
                published yet — enquire and we&apos;ll confirm current details.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Overview
              </h2>
              <p className="mt-4 max-w-2xl text-paper-dim leading-relaxed">
                {vehicle.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-2">
                    <spec.icon size={18} className="text-red" />
                    <span className="text-xs text-paper-faint">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-ink-line pt-6">
                <span className="text-xs text-paper-faint">Price</span>
                <span className="font-mono text-lg font-medium">
                  {vehicle.price ? `£${vehicle.price.toLocaleString()}` : "Contact for Price"}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-sm border border-ink-line bg-ink-raised p-6">
              <EnquiryForm
                enquiryType="vehiclePurchase"
                defaultVehicle={`${vehicle.make} ${vehicle.model}`}
              />
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <section className="mt-24 border-t border-ink-line pt-16 pb-24">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                You may also like
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((v, i) => (
                <Reveal key={v.id} delay={i * 60}>
                  <VehicleCard vehicle={v} />
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/cars" variant="secondary">
                View All Vehicles
              </Button>
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
