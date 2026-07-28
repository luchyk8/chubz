"use client";

import { useState } from "react";
import Image from "next/image";
import type { VehicleImage } from "@/lib/types";

export function VehicleGallery({ images }: { images: VehicleImage[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink-raised">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          preload={active === 0}
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-sm border transition-colors ${
                i === active ? "border-red" : "border-ink-line-strong"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
