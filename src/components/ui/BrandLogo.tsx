"use client";

import { useLocale } from "next-intl";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  markOnly?: boolean;
  inverted?: boolean;
};

export function BrandLogo({ className, markOnly = false, inverted = false }: BrandLogoProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid h-10 w-10 place-items-center rounded-lg text-sm font-black shadow-sm",
          inverted
            ? "bg-white text-panorama-navy"
            : "bg-panorama-navy text-white dark:bg-blue-600",
        )}
      >
        P
      </span>
      {markOnly ? null : (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-lg font-black",
              inverted ? "text-white" : "text-panorama-text dark:text-white",
            )}
          >
            {isArabic ? site.arabicName : site.name}
          </span>
          <span
            className={cn(
              "mt-1 text-xs font-bold",
              inverted ? "text-white/70" : "text-panorama-muted dark:text-white/50",
            )}
          >
            {isArabic ? site.name : site.arabicName}
          </span>
        </span>
      )}
    </span>
  );
}
