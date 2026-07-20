"use client";

import { useLocale } from "next-intl";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { SocialLinks } from "@/components/social/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { homeContent } from "@/content/home";

export function CTASection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = homeContent[siteLocale].contact; return <section aria-labelledby="contact-title" className="section-shell" id="contact"><Container><div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[linear-gradient(135deg,var(--color-brand-navy-deep)_0%,var(--color-brand-navy)_43%,var(--color-brand-purple)_100%)] px-6 py-14 text-center text-white shadow-[var(--shadow-raised)] sm:px-10 sm:py-20"><GoldThread className="absolute inset-x-0 top-6 opacity-90" /><div aria-hidden="true" className="absolute -start-20 -bottom-28 h-72 w-72 rounded-full border border-[var(--color-brand-gold)] opacity-35" /><div aria-hidden="true" className="absolute -end-16 -top-16 h-48 w-48 rounded-full bg-[var(--color-brand-burgundy)] opacity-25 blur-3xl" /><AnimatedReveal className="relative mx-auto max-w-3xl"><p className="text-sm font-extrabold text-[var(--color-brand-gold-contrast)]">{content.eyebrow}</p><h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl" id="contact-title">{content.title}</h2><p className="mt-5 text-base leading-8 text-white/76 sm:text-lg">{content.description}</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button className="bg-[var(--color-surface)] text-[var(--color-brand-navy)] hover:bg-[var(--color-background)]" href="/contact">{content.primaryCta}</Button><Button className="border-white/35 bg-transparent text-white hover:border-[var(--color-brand-gold-contrast)] hover:bg-white/10" href="/faq" variant="secondary">{content.secondaryCta}</Button></div><SocialLinks className="mt-7 justify-center" tone="inverse" /></AnimatedReveal></div></Container></section>; }
