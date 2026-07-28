"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/types";

export function FaqAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="flex flex-col divide-y divide-ink-line border-y border-ink-line">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-paper-dim transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-red" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 max-w-2xl text-paper-dim">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
