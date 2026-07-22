import { site, verifiedOrganizationSameAs } from "@/config/site";

type Locale = "ar" | "en";

const organizationAlternateNames = [
  "Panorama",
  "فريق بانوراما الطلابي",
  "Panorama SPU",
];

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function createSiteStructuredData(locale: Locale) {
  const logo = new URL(site.assets.logo, site.domain).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "بانوراما",
        alternateName: organizationAlternateNames,
        url: site.domain,
        logo,
        sameAs: verifiedOrganizationSameAs,
      },
      {
        "@type": "WebSite",
        name: "بانوراما",
        alternateName: organizationAlternateNames,
        url: site.domain,
        inLanguage: locale === "ar" ? "ar" : "en",
      },
    ],
  };
}
