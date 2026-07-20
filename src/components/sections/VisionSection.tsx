"use client";

import { Compass } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";

export function VisionSection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = homeContent[siteLocale].vision; return <section className="section-shell bg-[var(--color-background-subtle)]"><Container><div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"><span className="mx-auto grid h-36 w-36 place-items-center rounded-full border border-[var(--color-brand-gold)] bg-[color-mix(in_srgb,var(--color-brand-gold)_8%,transparent)] text-[var(--color-brand-gold)]"><Compass aria-hidden="true" className="h-14 w-14" /></span><div><SectionHeading description={content.description} eyebrow={content.eyebrow} title={content.title} /><Button className="mt-7" href="/about" variant="secondary">{content.action}</Button></div></div></Container></section>; }
