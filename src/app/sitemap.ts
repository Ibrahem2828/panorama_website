import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/privacy", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/terms", priority: 0.7, changeFrequency: "monthly" as const },
];

const arabicRoutes = [
  { path: "/ar", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ar/privacy", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/ar/terms", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const englishEntries = routes.map((route) => ({
    url: `${site.domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const arabicEntries = arabicRoutes.map((route) => ({
    url: `${site.domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...englishEntries, ...arabicEntries];
}
