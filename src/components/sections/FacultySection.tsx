"use client";

import { useLocale } from "next-intl";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FacultyCard } from "@/components/ui/FacultyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";
import { faculties } from "@/data/faculties";

export function FacultySection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = homeContent[siteLocale]; return <section aria-labelledby="faculties-title" className="section-shell" id="faculties"><Container><SectionHeading align="center" description={siteLocale === "ar" ? "كل كلية تحافظ على خصوصيتها البصرية ومجتمعها، وتبقى متصلة برسالة بانوراما المشتركة." : "Each faculty keeps its visual identity and community while remaining connected to Panorama’s shared mission."} eyebrow={siteLocale === "ar" ? "مجتمعات الكليات" : "Faculty communities"} id="faculties-title" title={siteLocale === "ar" ? "هوية واحدة وصوت مميز لكل كلية" : "One identity, a distinct voice for every faculty"} /><StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{faculties.filter((faculty) => faculty.enabled).map((faculty) => <StaggerItem key={faculty.slug}><FacultyCard faculty={faculty} /></StaggerItem>)}</StaggerGroup><div className="mt-10 text-center"><Button href="/faculties" variant="secondary">{content.sectionActions.faculties}</Button></div></Container></section>; }
