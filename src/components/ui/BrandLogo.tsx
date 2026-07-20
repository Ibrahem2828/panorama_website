"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
  priority?: boolean;
};

export function BrandLogo({ className, compact = false, priority = false }: BrandLogoProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
      <span className={cn("relative shrink-0 overflow-hidden rounded-[0.7rem] bg-white", compact ? "h-11 w-16" : "h-[4.75rem] w-[6.75rem]")}>
        <Image
          alt={isArabic ? "شعار فريق بانوراما الرسمي" : "Official Panorama team logo"}
          className="object-contain"
          fill
          priority={priority}
          sizes={compact ? "64px" : "108px"}
          src={site.assets.logo}
        />
      </span>
      {compact ? (
        <span className="min-w-0 leading-tight">
          <span className="block truncate text-base font-extrabold text-[var(--color-foreground)]">{isArabic ? site.arabicName : site.name}</span>
          <span className="block truncate text-[0.66rem] font-semibold text-[var(--color-muted)]">{isArabic ? site.name : site.arabicName}</span>
        </span>
      ) : null}
    </span>
  );
}
