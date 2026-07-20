import type { Metadata } from "next";
import { Blocks, Files, Megaphone, ShieldCheck } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { commonContent } from "@/content/common";
import { pageMeta } from "@/content/page-meta";
import { platformContent } from "@/content/platform";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
const icons = [Files, Megaphone, Blocks, ShieldCheck] as const;
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/platform", meta: localize(pageMeta, locale).platform }); }
export default async function PlatformPage({ params }: PageProps) { const { locale } = await params; const siteLocale = locale === "en" ? "en" : "ar"; const common = commonContent[siteLocale]; const content = platformContent[siteLocale]; return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).platform.title }]} {...content.hero} /><section className="section-shell pt-0"><Container><p className="mx-auto max-w-4xl border-s-2 border-[var(--color-brand-gold)] ps-5 text-lg font-bold leading-9 text-[var(--color-foreground)]">{content.supportStatement}</p><SectionHeading className="mt-14" description={siteLocale === "ar" ? "هذه مجالات تصميمية تشرح الدور المتوقع للمنصة، وليست قائمة وظائف أو وعوداً تشغيلية حالية." : "These design areas explain the platform’s intended role; they are not a list of current functions or operational promises."} eyebrow={localize(pageMeta, locale).platform.title} title={siteLocale === "ar" ? "كيف يمكن أن تدعم الرسالة" : "How it can support the mission"} /><StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{content.areas.map((area, index) => { const Icon = icons[index]; return <StaggerItem key={area.title}><article className="surface-card h-full p-6"><Icon aria-hidden="true" className="h-6 w-6 text-[var(--color-brand-gold)]" /><h2 className="mt-5 text-xl font-extrabold text-[var(--color-foreground)]">{area.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{area.description}</p></article></StaggerItem>; })}</StaggerGroup></Container></section><section className="section-shell bg-[var(--color-background-subtle)]"><Container><EmptyState action={{ label: content.unavailable.action, href: "/services" }} description={content.unavailable.description} title={content.unavailable.title} /></Container></section></main>; }
