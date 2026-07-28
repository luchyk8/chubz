import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { vehicles } from "@/lib/data/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/cars",
    "/chauffeur-hire",
    "/detailz",
    "/gallery",
    "/about",
    "/contact",
    "/faq",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${SITE.url}/cars/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
