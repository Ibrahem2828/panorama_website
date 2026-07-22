"use client";

import { Sparkles } from "lucide-react";
import { useLocale } from "next-intl";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { homeContent } from "@/content/home";

export function HeroSection() {
  const locale = useLocale();
  const siteLocale = locale === "en" ? "en" : "ar";
  const content = homeContent[siteLocale].hero;

  return (
    <section aria-labelledby="hero-title" className="section-shell isolate overflow-hidden pt-12 sm:pt-16" id="top">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -start-28 top-8 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-brand-purple)_14%,transparent)] blur-3xl" />
        <div className="absolute -end-20 bottom-0 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--color-brand-burgundy)_12%,transparent)] blur-3xl" />
      </div>
      <GoldThread className="absolute inset-x-0 top-8 opacity-70" />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedReveal distance={20}>
            <Badge><Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-brand-gold)]" />{content.eyebrow}</Badge>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08} distance={22}>
            <h1 className="display-title mx-auto" id="hero-title">{content.title}</h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.16} distance={20}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9">{content.description}</p>
            <p className="mt-5 text-sm font-extrabold tracking-wide text-[var(--color-brand-burgundy)]" dir={siteLocale === "ar" ? "rtl" : undefined}>{content.supportLine}</p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.24} distance={18}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/faculties">{content.primaryCta}</Button>
              <Button href="/volunteer" variant="secondary">{content.secondaryCta}</Button>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
