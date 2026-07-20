"use client";

import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { useLocale } from "next-intl";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { site } from "@/config/site";
import { homeContent } from "@/content/home";

export function HeroSection() {
  const locale = useLocale();
  const siteLocale = locale === "en" ? "en" : "ar";
  const content = homeContent[siteLocale].hero;
  return <section aria-labelledby="hero-title" className="section-shell isolate overflow-hidden pt-14 sm:pt-20" id="top"><div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden"><div className="absolute -start-24 top-12 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--color-brand-purple)_16%,transparent)] blur-3xl" /><div className="absolute -end-16 bottom-4 h-80 w-80 rounded-full bg-[color-mix(in_srgb,var(--color-brand-burgundy)_13%,transparent)] blur-3xl" /></div><Container><div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.82fr] lg:gap-16"><div><AnimatedReveal distance={20}><Badge><Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-brand-gold)]" />{content.eyebrow}</Badge></AnimatedReveal><AnimatedReveal delay={0.08} distance={22}><h1 className="display-title" id="hero-title">{content.title}</h1></AnimatedReveal><AnimatedReveal delay={0.16} distance={20}><p className="mt-6 max-w-2xl text-[1.04rem] leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9">{content.description}</p><p className="mt-5 text-lg font-extrabold text-[var(--color-brand-burgundy)]" dir="rtl" lang="ar">{site.slogan.ar}</p></AnimatedReveal><AnimatedReveal delay={0.24} distance={18}><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="/about">{content.primaryCta}</Button><Button href="/faculties" variant="secondary">{content.secondaryCta}</Button></div><Button className="mt-4 px-0" href="/faculties" variant="ghost">{content.facultyLink}{siteLocale === "ar" ? <ArrowLeft aria-hidden="true" className="h-4 w-4" /> : <ArrowUpRight aria-hidden="true" className="h-4 w-4" />}</Button></AnimatedReveal></div><AnimatedReveal className="relative mx-auto w-full max-w-xl" delay={0.18} direction="end"><div className="surface-card--elevated relative aspect-[1.06] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-8"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-brand-purple)_12%,transparent),transparent_63%)]" /><GoldThread className="absolute inset-x-0 top-7 opacity-85" /><div className="relative mx-auto mt-10 aspect-[1.4] max-w-[28rem] overflow-hidden rounded-[1.4rem] bg-white p-3 shadow-[var(--shadow-card)]"><Image alt={siteLocale === "ar" ? "شعار فريق بانوراما الرسمي" : "Official Panorama team logo"} className="object-contain" fill priority sizes="(max-width: 1024px) 86vw, 38vw" src={site.assets.logo} /></div><div className="relative mt-5 grid grid-cols-2 gap-3">{content.highlights.map((highlight) => <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_75%,transparent)] px-4 py-3 text-center text-xs font-bold leading-5 text-[var(--color-muted)] backdrop-blur-sm" key={highlight}>{highlight}</div>)}</div><span aria-hidden="true" className="absolute -bottom-12 -end-12 h-36 w-36 rounded-full border border-[var(--color-brand-gold)] opacity-45" /></div></AnimatedReveal></div></Container></section>;
}
