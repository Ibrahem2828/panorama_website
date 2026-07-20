export type SiteLocale = "ar" | "en";

export type Localized<T> = Record<SiteLocale, T>;

export type ContentStatus = "verified" | "editable" | "future" | "pending";

export type AvailabilityStatus = "available" | "limited" | "digital" | "comingSoon";

export function localize<T>(value: Localized<T>, locale: string): T {
  return value[locale === "en" ? "en" : "ar"];
}

export function isSiteLocale(locale: string): locale is SiteLocale {
  return locale === "ar" || locale === "en";
}
