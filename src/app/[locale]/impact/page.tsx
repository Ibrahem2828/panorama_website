import type { Metadata } from "next";
import { HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { commonContent } from "@/content/common";
import { engagementContent } from "@/content/engagement";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
const icons = [Lightbulb, ShieldCheck, HeartHandshake] as const;
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/impact", meta: localize(pageMeta, locale).impact }); }
export default async function ImpactPage({ params }: PageProps) { const { locale } = await params; const siteLocale = locale === "en" ? "en" : "ar"; const common = commonContent[siteLocale]; const content = engagementContent[siteLocale].impact; return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).impact.title }]} {...content} /><section className="section-shell pt-0"><Container><StaggerGroup className="grid gap-5 lg:grid-cols-3">{content.principles.map((principle, index) => { const Icon = icons[index]; return <StaggerItem key={principle.title}><article className="surface-card h-full p-7"><Icon aria-hidden="true" className="h-7 w-7 text-[var(--color-brand-gold)]" /><h2 className="mt-6 text-2xl font-extrabold text-[var(--color-foreground)]">{principle.title}</h2><p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">{principle.description}</p></article></StaggerItem>; })}</StaggerGroup></Container></section></main>; }
