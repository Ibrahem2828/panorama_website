"use client";

import { useLocale } from "next-intl";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FacultyCard } from "@/components/ui/FacultyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";
import { faculties } from "@/data/faculties";

export function FacultySection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = homeContent[siteLocale]; return <section aria-labelledby="faculties-title" className="section-shell" id="faculties"><Container><SectionHeading align="center" description={siteLocale === "ar" ? "كل كلية لها مجتمعها وخصوصيتها، وتلتقي المجتمعات حول المعرفة والخدمة والتعاون." : "Each faculty has its own community and character while meeting around knowledge, service, and cooperation."} eyebrow={siteLocale === "ar" ? "مجتمعات الكليات" : "Faculty communities"} id="faculties-title" title={siteLocale === "ar" ? "تعرّف إلى مجتمعات الكليات" : "Explore faculty communities"} /><StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{faculties.filter((faculty) => faculty.enabled).slice(0, 4).map((faculty) => <StaggerItem key={faculty.slug}><FacultyCard faculty={faculty} /></StaggerItem>)}</StaggerGroup><div className="mt-8 text-center"><Button href="/faculties" variant="secondary">{content.sectionActions.faculties}</Button></div></Container></section>; }
