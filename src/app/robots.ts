import type { MetadataRoute } from "next";
import { CANONICAL_HOST, site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: CANONICAL_HOST,
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
