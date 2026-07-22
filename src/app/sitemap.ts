import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { faculties } from "@/data/faculties";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/faculties", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/volunteer", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/platform", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/impact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/terms", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/en"].flatMap((localePrefix) =>
    routes.map((route) => ({
      url: `${site.domain}${localePrefix}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: localePrefix ? route.priority * 0.95 : route.priority,
    })),
  );
  const facultyRoutes = ["", "/en"].flatMap((localePrefix) =>
    faculties.filter((faculty) => faculty.enabled && faculty.detailPageEnabled).map((faculty) => ({
      url: `${site.domain}${localePrefix}/faculties/${faculty.slug}`,
      changeFrequency: "monthly" as const,
      priority: localePrefix ? 0.66 : 0.7,
    })),
  );

  return [...staticRoutes, ...facultyRoutes];
}
