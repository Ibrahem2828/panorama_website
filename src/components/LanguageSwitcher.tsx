"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isArabic = locale === "ar";
  const targetPath = isArabic
    ? `/en${pathname === "/" ? "" : pathname}`
    : pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  return (
    <button
      aria-label={t("switchLanguageAria")}
      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] px-3 text-xs font-extrabold text-[var(--color-foreground)] transition-[transform,border-color,background-color] duration-150 hover:-translate-y-px hover:border-[var(--color-brand-gold)] hover:bg-[var(--color-surface-elevated)]"
      onClick={() => window.location.assign(targetPath)}
      type="button"
    >
      <Languages aria-hidden="true" className="h-4 w-4" />
      <span>{isArabic ? "EN" : "ع"}</span>
    </button>
  );
}
