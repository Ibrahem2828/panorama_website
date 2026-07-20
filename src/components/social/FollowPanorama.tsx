"use client";

import { useLocale } from "next-intl";
import { SocialLinks } from "@/components/social/SocialLinks";
import { localize } from "@/content/types";
import { homeContent } from "@/content/home";

export function FollowPanorama() {
  const locale = useLocale();
  const content = localize(homeContent, locale).social;
  return (
    <section aria-labelledby="follow-panorama-title" className="section-shell--compact bg-[var(--color-background-subtle)]">
      <div className="page-container text-center">
        <p className="text-sm font-extrabold text-[var(--color-brand-burgundy)]">{content.eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-[var(--color-foreground)] sm:text-4xl" id="follow-panorama-title">{content.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">{content.description}</p>
        <SocialLinks className="mt-6 justify-center" />
      </div>
    </section>
  );
}
