import Image from "next/image";
import Link from "next/link";
import { Fuel, Cog } from "lucide-react";
import type { Vehicle } from "@/lib/types";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={`/cars/${vehicle.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink-line bg-ink-raised transition-colors hover:border-ink-line-strong"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={vehicle.images[0].src}
          alt={vehicle.images[0].alt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="plate-tag absolute left-3 top-3 rounded-[3px] bg-plate-yellow px-2 py-1 text-[10px] text-plate-ink">
          {vehicle.bodyType}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight">
            {vehicle.make} {vehicle.model}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs text-paper-dim">
          <span className="inline-flex items-center gap-1.5">
            <Fuel size={14} /> {vehicle.fuelType}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Cog size={14} /> {vehicle.transmission}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-sm font-medium text-paper">
            {vehicle.price ? `£${vehicle.price.toLocaleString()}` : "Contact for Price"}
          </span>
          <span className="text-xs font-medium text-red group-hover:underline">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
