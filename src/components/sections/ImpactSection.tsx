"use client";

import { CheckCircle2, HeartHandshake, TrendingUp } from "lucide-react";
import { useLocale } from "next-intl";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { engagementContent } from "@/content/engagement";

const impactIcons = [HeartHandshake, CheckCircle2, TrendingUp] as const;
export function ImpactSection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = engagementContent[siteLocale].impact; return <section aria-labelledby="impact-title" className="section-shell overflow-hidden" id="impact"><Container><div className="surface-card--elevated relative overflow-hidden bg-[var(--color-brand-navy)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14"><GoldThread className="absolute inset-x-0 top-4 opacity-90" /><div aria-hidden="true" className="absolute -end-24 bottom-0 h-72 w-72 rounded-full border border-[var(--color-brand-gold)] opacity-30" /><div className="relative grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center"><div><AnimatedReveal><p className="text-sm font-extrabold text-[var(--color-brand-gold-contrast)]">{content.eyebrow}</p><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight sm:text-5xl" id="impact-title">{content.title}</h2><p className="mt-5 max-w-lg text-base leading-8 text-white/74 sm:text-lg">{content.description}</p><Button className="mt-7 border-white/35 bg-transparent text-white hover:border-[var(--color-brand-gold-contrast)] hover:bg-white/10" href="/impact" variant="secondary">{siteLocale === "ar" ? "كيف ننظر إلى الأثر" : "How we approach impact"}</Button></AnimatedReveal></div><div className="grid gap-4 sm:grid-cols-3">{content.principles.map((card, index) => { const Icon = impactIcons[index]; return <AnimatedReveal delay={index * 0.07} key={card.title}><article className="h-full rounded-[var(--radius-md)] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm"><Icon aria-hidden="true" className="h-6 w-6 text-[var(--color-brand-gold-contrast)]" /><h3 className="mt-5 text-lg font-extrabold">{card.title}</h3><p className="mt-2 text-sm leading-7 text-white/65">{card.description}</p></article></AnimatedReveal>; })}</div></div></div></Container></section>; }
