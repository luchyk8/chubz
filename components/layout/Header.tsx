"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-ink/95 border-b border-ink-line backdrop-blur-md"
            : "bg-gradient-to-b from-ink/70 to-transparent border-b border-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between py-4">
          <Link href="/" className="font-display font-extrabold tracking-tight text-lg sm:text-xl">
            CHUBZ<span className="text-red">.</span>MOTORS
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-paper-dim hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+447760149571" className="text-sm text-paper-dim hover:text-paper transition-colors">
              Call
            </a>
            <Button href="/contact" size="md">
              Enquire Now
            </Button>
          </div>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-paper"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </Container>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
