import type { MetadataRoute } from "next";
import { services } from "@/lib/site";
import { landingServices } from "@/lib/landingServices";
import { locations } from "@/lib/locations";
import { posts } from "@/lib/blog";
import { SITE_URL } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/service-areas", priority: 0.9 },
    { path: "/leak-detection-guide", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/insurance", priority: 0.7 },
    { path: "/emergency", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
  ];

  const dynamicRoutes = [
    ...landingServices.map((s) => ({ path: `/${s.slug}`, priority: 0.9 })),
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    ...locations.map((l) => ({ path: `/locations/${l.slug}`, priority: 0.8 })),
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
