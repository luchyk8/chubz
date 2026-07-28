"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import type { Vehicle } from "@/lib/types";

const ALL = "All";

export function VehicleBrowser({ vehicles }: { vehicles: Vehicle[] }) {
  const [bodyType, setBodyType] = useState(ALL);
  const [fuelType, setFuelType] = useState(ALL);
  const [transmission, setTransmission] = useState(ALL);
  const [sort, setSort] = useState<"newest" | "az">("newest");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const bodyTypes = useMemo(
    () => [ALL, ...Array.from(new Set(vehicles.map((v) => v.bodyType)))],
    [vehicles]
  );
  const fuelTypes = useMemo(
    () => [ALL, ...Array.from(new Set(vehicles.map((v) => v.fuelType)))],
    [vehicles]
  );
  const transmissions = useMemo(
    () => [ALL, ...Array.from(new Set(vehicles.map((v) => v.transmission)))],
    [vehicles]
  );

  const filtered = useMemo(() => {
    let result = vehicles.filter(
      (v) =>
        (bodyType === ALL || v.bodyType === bodyType) &&
        (fuelType === ALL || v.fuelType === fuelType) &&
        (transmission === ALL || v.transmission === transmission)
    );

    if (sort === "az") {
      result = [...result].sort((a, b) =>
        `${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`)
      );
    }

    return result;
  }, [vehicles, bodyType, fuelType, transmission, sort]);

  const hasActiveFilters =
    bodyType !== ALL || fuelType !== ALL || transmission !== ALL;

  function clearFilters() {
    setBodyType(ALL);
    setFuelType(ALL);
    setTransmission(ALL);
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
      <button
        onClick={() => setFiltersOpen((v) => !v)}
        className="flex items-center justify-between rounded-sm border border-ink-line-strong px-4 py-3 text-sm font-medium lg:hidden"
      >
        <span className="inline-flex items-center gap-2">
          <SlidersHorizontal size={16} /> Filters
        </span>
        {hasActiveFilters && (
          <span className="rounded-full bg-red px-2 py-0.5 text-xs">On</span>
        )}
      </button>

      <aside
        className={`flex-col gap-6 lg:flex ${filtersOpen ? "flex" : "hidden"}`}
      >
        <FilterGroup label="Body Type" value={bodyType} options={bodyTypes} onChange={setBodyType} />
        <FilterGroup label="Fuel Type" value={fuelType} options={fuelTypes} onChange={setFuelType} />
        <FilterGroup label="Transmission" value={transmission} options={transmissions} onChange={setTransmission} />

        <div>
          <label className="text-xs font-medium text-paper-dim">Sort By</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "newest" | "az")}
            className="mt-2 w-full rounded-sm border border-ink-line-strong bg-ink px-3 py-2.5 text-sm"
          >
            <option value="newest">Newest Listed</option>
            <option value="az">A–Z</option>
          </select>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="inline-flex w-fit items-center gap-1.5 text-xs text-paper-dim hover:text-paper"
          >
            <X size={14} /> Clear filters
          </button>
        )}
      </aside>

      <div>
        <p className="mb-6 text-xs text-paper-faint">
          Showing {filtered.length} of {vehicles.length} vehicles
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-start gap-4 rounded-sm border border-ink-line bg-ink-raised p-10">
            <p className="font-display text-xl font-bold">
              No vehicles currently match your filters.
            </p>
            <p className="text-paper-dim">
              We may have something arriving soon that isn&apos;t listed yet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={clearFilters} variant="secondary">
                Clear Filters
              </Button>
              <Button href="/contact">Enquire — We May Have Something</Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-paper-dim">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-sm border border-ink-line-strong bg-ink px-3 py-2.5 text-sm"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
