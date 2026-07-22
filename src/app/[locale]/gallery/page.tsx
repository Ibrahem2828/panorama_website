import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/config/site";
import { commonContent } from "@/content/common";
import { engagementContent } from "@/content/engagement";
import { pageMeta } from "@/content/page-meta";
import { approvedGalleryItems } from "@/content/publications";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/gallery", meta: localize(pageMeta, locale).gallery, indexable: false }); }
export default async function GalleryPage({ params }: PageProps) { const { locale } = await params; const siteLocale = locale === "en" ? "en" : "ar"; const common = commonContent[siteLocale]; const content = engagementContent[siteLocale].gallery; const items = approvedGalleryItems[siteLocale]; const canPublish = site.featureFlags.showGallery && items.length > 0; return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).gallery.title }]} {...content} /><section className="section-shell pt-0"><Container>{canPublish ? <GalleryGrid items={items} /> : <EmptyState action={{ label: content.action, href: "/initiatives" }} description={content.emptyDescription} title={content.emptyTitle} />}</Container></section></main>; }
