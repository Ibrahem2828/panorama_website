"use client";

import { Lightbulb, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";

export function InitiativesPreviewSection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = homeContent[siteLocale]; return <section className="section-shell"><Container><div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center"><SectionHeading description={content.initiatives.description} eyebrow={content.initiatives.eyebrow} title={content.initiatives.title} /><article className="surface-card p-7 sm:p-8"><Lightbulb aria-hidden="true" className="h-7 w-7 text-[var(--color-brand-gold)]" /><p className="mt-6 text-xl font-extrabold leading-8 text-[var(--color-foreground)]">{content.initiatives.empty}</p><p className="mt-4 flex gap-3 text-sm leading-7 text-[var(--color-muted)]"><ShieldCheck aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand-burgundy)]" />{siteLocale === "ar" ? "لا نعرض فعاليات أو تواريخ أو شركاء قبل توثيقها واعتمادها." : "We do not display events, dates, or partners before they are verified and approved."}</p><Button className="mt-7" href="/initiatives" variant="secondary">{content.sectionActions.initiatives}</Button></article></div></Container></section>; }
