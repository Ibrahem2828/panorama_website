import type { Metadata } from "next";
import { faculties } from "@/data/faculties";
import { commonContent } from "@/content/common";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { FacultyCard } from "@/components/ui/FacultyCard";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/faculties", meta: localize(pageMeta, locale).faculties }); }
export default async function FacultiesPage({ params }: PageProps) { const { locale } = await params; const common = localize(commonContent, locale); const meta = localize(pageMeta, locale).faculties; return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: meta.title }]} description={locale === "ar" ? "كل كلية تحمل صوتها البصري ومجتمعها، وتبقى جزءاً من هوية بانوراما المشتركة." : "Every faculty has its visual voice and community while remaining part of Panorama’s shared identity."} eyebrow={meta.title} title={locale === "ar" ? "مجتمعات متعددة تحت هوية بانوراما الواحدة" : "Multiple communities under one Panorama identity"} /><section className="section-shell pt-0"><Container><StaggerGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{faculties.filter((faculty) => faculty.enabled).map((faculty) => <StaggerItem key={faculty.slug}><FacultyCard faculty={faculty} /></StaggerItem>)}</StaggerGroup></Container></section></main>; }
