import type { Metadata } from "next";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/900.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Premium Automotive Services in London`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "CHUBZ MOTORS — premium vehicle sales, chauffeur services, self-drive hire and airport transfers in London, plus CHUBZ DETAILZ mobile vehicle detailing.",
  openGraph: {
    title: `${SITE.name} | Premium Automotive Services in London`,
    description:
      "Vehicle sales, chauffeur & self-drive hire, airport transfers and mobile detailing — one premium London automotive brand.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className="antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}

