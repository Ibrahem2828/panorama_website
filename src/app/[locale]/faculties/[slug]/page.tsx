import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FacultyDetailPage } from "@/components/faculty/FacultyDetailPage";
import { commonContent } from "@/content/common";
import { facultyPageContent } from "@/content/faculty-page";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { faculties } from "@/data/faculties";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

function getFaculty(slug: string) {
  return faculties.find((faculty) => faculty.slug === slug && faculty.enabled && faculty.detailPageEnabled);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const faculty = getFaculty(slug);
  if (!faculty) return {};
  const name = faculty.name[locale === "en" ? "en" : "ar"];
  const meta = localize(pageMeta, locale).faculties;
  return createPageMetadata({ locale, path: `/faculties/${slug}`, meta: { title: `${name} | ${meta.title}`, description: faculty.description[locale === "en" ? "en" : "ar"] } });
}

export default async function FacultyPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const faculty = getFaculty(slug);
  if (!faculty) notFound();
  const common = localize(commonContent, locale);
  const content = localize(facultyPageContent, locale);
  const availabilityLabel = locale === "ar"
    ? faculty.availability === "available" ? "متاح عبر المجتمع" : "متاح بحسب المجتمع"
    : faculty.availability === "available" ? "Available through the community" : "Availability varies by community";
  return <FacultyDetailPage faculty={faculty} labels={{ ...common, ...content, availability: common.availability, availabilityLabel }} locale={locale === "en" ? "en" : "ar"} />;
}
