"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryCategory, GalleryItem } from "@/lib/types";

const FILTERS: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "vehicle", label: "Vehicles" },
  { value: "chauffeur", label: "Chauffeur" },
  { value: "detailing", label: "Detailing" },
];

const spanClasses: Record<string, string> = {
  wide: "sm:col-span-2",
  tall: "row-span-2",
  normal: "",
};

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );

  function close() {
    setActiveIndex(null);
  }

  function step(delta: number) {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + delta + filtered.length) % filtered.length);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              filter === f.value
                ? "bg-red text-paper"
                : "border border-ink-line-strong text-paper-dim hover:text-paper"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 auto-rows-[180px] gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className={`group relative overflow-hidden rounded-sm ${spanClasses[item.span ?? "normal"]}`}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 text-paper hover:text-red"
          >
            <X size={28} />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-paper hover:text-red sm:left-8"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[activeIndex].image.src}
              alt={filtered[activeIndex].image.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-paper hover:text-red sm:right-8"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
