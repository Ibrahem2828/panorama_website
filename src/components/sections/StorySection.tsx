"use client";

import { HeartHandshake, Lightbulb, Orbit, UsersRound } from "lucide-react";
import { useLocale } from "next-intl";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";

const valueIcons = [HeartHandshake, UsersRound, Lightbulb, Orbit] as const;
export function StorySection() { const locale = useLocale(); const siteLocale = locale === "en" ? "en" : "ar"; const home = homeContent[siteLocale].philosophy; const about = aboutContent[siteLocale]; return <section aria-labelledby="story-title" className="section-shell bg-[var(--color-background-subtle)]" id="story"><GoldThread className="absolute inset-x-0 top-1 opacity-70" /><Container><div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"><div><SectionHeading description={home.description} eyebrow={home.eyebrow} id="story-title" title={home.title} /><p className="mt-6 text-2xl font-extrabold text-[var(--color-brand-burgundy)]" dir="rtl">{home.phrase}</p><Button className="mt-7" href="/about" variant="secondary">{home.action}</Button></div><StaggerGroup className="grid gap-4 sm:grid-cols-2">{about.values.slice(0, 4).map((value, index) => { const Icon = valueIcons[index]; return <StaggerItem key={value.id}><article className="surface-card h-full p-6"><span className="grid h-11 w-11 place-items-center rounded-[0.85rem] bg-[color-mix(in_srgb,var(--color-brand-burgundy)_10%,transparent)] text-[var(--color-brand-burgundy)] dark:bg-[color-mix(in_srgb,var(--color-brand-burgundy)_22%,transparent)]"><Icon aria-hidden="true" className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-extrabold text-[var(--color-foreground)]">{value.title}</h3><p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{value.description}</p></article></StaggerItem>; })}</StaggerGroup></div></Container></section>; }
