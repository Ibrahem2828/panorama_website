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

  if (compact) {
    return (
      <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-white shadow-[var(--shadow-xs)]">
          <Image
            alt={isArabic ? "رمز فريق بانوراما" : "Panorama symbol"}
            className="object-cover"
            fill
            priority={priority}
            sizes="40px"
            src={site.assets.favicon}
          />
        </span>
        <span className="truncate text-base font-extrabold leading-tight text-[var(--color-foreground)]">
          {isArabic ? site.arabicName : site.name}
        </span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
      <span className="relative h-[4.75rem] w-[6.75rem] shrink-0 overflow-hidden rounded-[0.7rem] bg-white">
        <Image
          alt={isArabic ? "شعار فريق بانوراما الرسمي" : "Official Panorama team logo"}
          className="object-contain"
          fill
          priority={priority}
          sizes="108px"
          src={site.assets.logo}
        />
      </span>
    </span>
  );
}
