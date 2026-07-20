"use client";

import { BookOpenCheck, FileStack, HandHeart, Megaphone, Sparkles, UsersRound } from "lucide-react";
import { useLocale } from "next-intl";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";
import { services, servicesContent } from "@/content/services";

const serviceIcons = [BookOpenCheck, UsersRound, HandHeart, Sparkles, Megaphone, FileStack] as const;
export function ServicesSection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const content = servicesContent[siteLocale]; const home = homeContent[siteLocale]; return <section aria-labelledby="services-title" className="section-shell bg-[var(--color-background-subtle)]" id="services"><Container><SectionHeading align="center" description={content.hero.description} eyebrow={content.hero.eyebrow} id="services-title" title={content.hero.title} /><StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services[siteLocale].slice(0, 6).map((service, index) => { const Icon = serviceIcons[index]; return <StaggerItem key={service.id}><FeatureCard description={service.description} icon={<Icon aria-hidden="true" className="h-6 w-6" />} title={service.title} /></StaggerItem>; })}</StaggerGroup><div className="mt-10 text-center"><Button href="/services" variant="secondary">{home.sectionActions.services}</Button></div></Container></section>; }
