"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, INSTAGRAM, CONFIRMED_CONTACT } from "@/lib/constants";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      inert={!open}
      className={`fixed inset-0 z-40 lg:hidden bg-ink transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex h-full flex-col justify-between px-6 pt-28 pb-10">
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-4xl font-extrabold tracking-tight py-3 border-b border-ink-line"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={onClose}
            className="font-display text-4xl font-extrabold tracking-tight py-3 border-b border-ink-line"
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-col gap-4">
          <Button href="/contact" size="lg" className="w-full" onClick={onClose}>
            Enquire Now
          </Button>
          <div className="flex items-center justify-between text-paper-dim text-sm pt-2">
            <a href={CONFIRMED_CONTACT.detailzPhoneHref} className="inline-flex items-center gap-2">
              <Phone size={16} /> Call
            </a>
            <a
              href={INSTAGRAM.motors.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <InstagramIcon size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
