import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { commonContent } from "@/content/common";
import { faqItems, faqPageContent } from "@/content/faq";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/faq", meta: localize(pageMeta, locale).faq }); }
export default async function FaqPage({ params }: PageProps) { const { locale } = await params; const siteLocale = locale === "en" ? "en" : "ar"; const common = commonContent[siteLocale]; const content = faqPageContent[siteLocale]; return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).faq.title }]} {...content.hero} /><section className="section-shell pt-0"><Container><FaqAccordion items={faqItems[siteLocale]} /><div className="mt-8 text-center"><Button href="/contact" variant="secondary">{content.contactCta}</Button></div></Container></section></main>; }
