"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Button } from "@/components/ui/Button";
import { INSTAGRAM } from "@/lib/constants";

const FIELD_TAGS = ["INPUT", "TEXTAREA", "SELECT"];

export function StickyMobileBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag && FIELD_TAGS.includes(tag)) setHidden(true);
    };
    const onFocusOut = () => setHidden(false);

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-ink-line bg-ink/95 backdrop-blur-md transition-transform duration-300 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-3 px-4 py-3">
        <a
          href={INSTAGRAM.motors.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-paper/25 py-3 text-sm font-medium"
        >
          <InstagramIcon size={16} /> Instagram
        </a>
        <Button href="/contact" size="md" className="w-full" icon={<ArrowUpRight size={16} />}>
          Enquire
        </Button>
      </div>
    </div>
  );
}
