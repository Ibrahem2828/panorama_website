"use client";

import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { homeContent } from "@/content/home";

export function VolunteerPreviewSection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = homeContent[siteLocale].volunteer; return <section className="section-shell overflow-hidden"><Container><div className="surface-card--elevated relative overflow-hidden bg-[color-mix(in_srgb,var(--color-brand-navy)_7%,var(--color-surface))] p-8 sm:p-12"><GoldThread className="absolute inset-x-0 top-3 opacity-80" /><div aria-hidden="true" className="absolute -end-16 -bottom-20 h-64 w-64 rounded-full bg-[var(--color-brand-purple)] opacity-10 blur-3xl" /><div className="relative grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-brand-gold)_17%,transparent)] text-[var(--color-brand-gold)]"><HeartHandshake aria-hidden="true" className="h-8 w-8" /></span><div><p className="text-sm font-extrabold text-[var(--color-brand-burgundy)]">{content.eyebrow}</p><h2 className="mt-3 text-3xl font-extrabold leading-tight text-[var(--color-foreground)] sm:text-4xl">{content.title}</h2><p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-muted)]">{content.description}</p></div><Button href="/volunteer">{content.action}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Button></div></div></Container></section>; }
