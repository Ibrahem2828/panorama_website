import type { Metadata } from "next";
import { FollowPanorama } from "@/components/social/FollowPanorama";
import { NewsCard } from "@/components/news/NewsCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/config/site";
import { commonContent } from "@/content/common";
import { engagementContent } from "@/content/engagement";
import { pageMeta } from "@/content/page-meta";
import { approvedNews } from "@/content/publications";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/news", meta: localize(pageMeta, locale).news }); }
export default async function NewsPage({ params }: PageProps) { const { locale } = await params; const siteLocale = locale === "en" ? "en" : "ar"; const common = commonContent[siteLocale]; const content = engagementContent[siteLocale].news; const items = approvedNews[siteLocale]; const canPublish = site.featureFlags.showNews && items.length > 0; return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).news.title }]} {...content} /><section className="section-shell pt-0"><Container>{canPublish ? <div className="grid gap-5 lg:grid-cols-3">{items.map((item) => <NewsCard item={item} key={item.title} />)}</div> : <EmptyState action={{ label: content.action, href: "/contact" }} description={content.emptyDescription} title={content.emptyTitle} />}</Container></section><FollowPanorama /></main>; }
