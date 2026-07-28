import Link from "next/link";
import { Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Container } from "@/components/ui/Container";
import {
  FOOTER_LINKS,
  INSTAGRAM,
  CONFIRMED_CONTACT,
  SITE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-raised">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="font-display font-extrabold text-xl tracking-tight">
              CHUBZ<span className="text-red">.</span>MOTORS
            </Link>
            <p className="text-sm text-paper-dim max-w-xs">
              Premium automotive services in London — vehicle sales,
              chauffeur &amp; hire, and CHUBZ DETAILZ mobile detailing.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={INSTAGRAM.motors.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CHUBZ MOTORS on Instagram"
                className="text-paper-dim hover:text-paper transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <FooterColumn title="Explore" links={FOOTER_LINKS.explore} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />

          <div className="flex flex-col gap-3">
            <h3 className="plate-tag text-paper-faint text-xs">Contact</h3>
            <a
              href={CONFIRMED_CONTACT.detailzPhoneHref}
              className="inline-flex items-center gap-2 text-sm text-paper-dim hover:text-paper transition-colors"
            >
              <Phone size={15} /> {CONFIRMED_CONTACT.detailzPhone}
            </a>
            <p className="text-xs text-paper-faint">
              CHUBZ DETAILZ direct line. General &amp; sales enquiries via
              the form or Instagram.
            </p>
            <p className="text-sm text-paper-dim">{SITE.location}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-8 text-xs text-paper-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. Est. {SITE.established}.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-paper-dim transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="plate-tag text-paper-faint text-xs">{title}</h3>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-paper-dim hover:text-paper transition-colors w-fit"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
