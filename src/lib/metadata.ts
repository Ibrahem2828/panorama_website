import type { Metadata } from "next";
import type { PageMeta } from "@/content/page-meta";
import { site } from "@/config/site";

type MetadataInput = {
  locale: string;
  path: string;
  meta: PageMeta;
};

function localeUrl(locale: string, path: string) {
  const normalizedPath = path === "/" ? "" : path;
  return `${site.domain}${locale === "en" ? "/en" : ""}${normalizedPath}`;
}

export function createPageMetadata({ locale, path, meta }: MetadataInput): Metadata {
  const canonical = localeUrl(locale, path);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: { ar: localeUrl("ar", path), en: localeUrl("en", path) },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: "website",
      locale: locale === "ar" ? "ar_SY" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SY",
      images: [{ url: site.assets.defaultOpenGraphImage, width: 3508, height: 2480, alt: locale === "ar" ? "شعار فريق بانوراما الرسمي" : "Official Panorama team logo" }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [site.assets.defaultOpenGraphImage] },
    robots: { index: true, follow: true },
  };
}
