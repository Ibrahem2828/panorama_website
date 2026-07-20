"use client";

import { AppWindow, BellRing, Files, Printer } from "lucide-react";
import { useLocale } from "next-intl";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";
import { platformContent } from "@/content/platform";

const platformIcons = [Files, BellRing, Printer] as const;
export function PlatformSection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = platformContent[siteLocale]; const home = homeContent[siteLocale]; return <section aria-labelledby="platform-title" className="section-shell bg-[var(--color-background-subtle)]" id="platform"><Container><div className="grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center"><div><SectionHeading description={content.hero.description} eyebrow={content.hero.eyebrow} id="platform-title" title={content.hero.title} /><Button className="mt-7" href="/platform" variant="secondary">{home.sectionActions.platform}</Button></div><AnimatedReveal direction="end"><div className="surface-card--elevated overflow-hidden p-5 sm:p-7"><div className="rounded-[var(--radius-lg)] bg-[linear-gradient(135deg,var(--color-brand-navy),var(--color-brand-purple))] p-6 text-white"><AppWindow aria-hidden="true" className="h-7 w-7 text-[var(--color-brand-gold-contrast)]" /><p className="mt-9 text-2xl font-extrabold">{siteLocale === "ar" ? "مساحة رقمية أكثر تنظيماً" : "A more organized digital space"}</p><p className="mt-2 max-w-sm text-sm leading-7 text-white/70">{content.supportStatement}</p></div><div className="mt-5 grid gap-3">{content.areas.slice(0, 3).map((area, index) => { const Icon = platformIcons[index]; return <div className="flex items-center gap-3 rounded-[var(--radius-sm)] bg-[var(--color-background-subtle)] p-4" key={area.title}><Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--color-brand-purple)] dark:text-[var(--color-brand-purple-contrast)]" /><span className="text-sm font-bold text-[var(--color-foreground)]">{area.title}</span></div>; })}</div></div></AnimatedReveal></div></Container></section>; }
