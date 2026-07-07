"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  const isArabic = locale === "ar";
  const targetLocale = isArabic ? "en" : "ar";

  const label = isArabic ? t("switchToEnglish") : t("switchLanguage");
  const ariaLabel = isArabic ? t("switchToEnglishAria") : t("switchLanguageAria");

  function handleSwitch() {
    router.replace(pathname, { locale: targetLocale });
  }

  return (
    <button
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-9 items-center justify-center rounded-full border px-3.5 py-1.5 text-xs font-bold transition",
        "border-panorama-silver/60 bg-white/80 text-panorama-navy hover:border-panorama-navy hover:bg-white",
        "dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/40 dark:hover:bg-white/10",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panorama-purple",
      )}
      onClick={handleSwitch}
      type="button"
    >
      {label}
    </button>
  );
}
