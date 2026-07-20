import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FollowPanorama } from "@/components/social/FollowPanorama";
import { commonContent } from "@/content/common";
import { initiativesContent } from "@/content/initiatives";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/initiatives", meta: localize(pageMeta, locale).initiatives }); }
export default async function InitiativesPage({ params }: PageProps) { const { locale } = await params; const siteLocale = locale === "en" ? "en" : "ar"; const common = commonContent[siteLocale]; const content = initiativesContent[siteLocale]; return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).initiatives.title }]} {...content.hero} /><section className="section-shell pt-0"><Container><EmptyState action={{ label: content.empty.action, href: "/contact" }} description={content.empty.description} title={content.empty.title} /></Container></section><FollowPanorama /></main>; }
