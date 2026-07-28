"use client";

import { useState } from "react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import type { EnquiryType } from "@/lib/types";

const TABS: { type: EnquiryType; label: string }[] = [
  { type: "general", label: "General" },
  { type: "vehiclePurchase", label: "Vehicle" },
  { type: "chauffeur", label: "Chauffeur" },
  { type: "selfDrive", label: "Self-Drive" },
  { type: "airportTransfer", label: "Airport" },
  { type: "detailing", label: "Detailing" },
];

export function EnquirySwitcher() {
  const [active, setActive] = useState<EnquiryType>("general");

  return (
    <div className="rounded-sm border border-ink-line bg-ink-raised p-6 md:p-8">
      <div className="flex flex-wrap gap-2 border-b border-ink-line pb-6">
        {TABS.map((tab) => (
          <button
            key={tab.type}
            onClick={() => setActive(tab.type)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              active === tab.type
                ? "bg-red text-paper"
                : "border border-ink-line-strong text-paper-dim hover:text-paper"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-6">
        <EnquiryForm key={active} enquiryType={active} />
      </div>
    </div>
  );
}
