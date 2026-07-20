import type { Metadata } from "next";
import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { aboutContent } from "@/content/about";
import { commonContent } from "@/content/common";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldThread } from "@/components/ui/GoldThread";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { ValueCard } from "@/components/ui/ValueCard";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
const icons = [HeartHandshake, UsersRound, Sparkles, ShieldCheck, UsersRound, ShieldCheck, Lightbulb, Sparkles, HeartHandshake] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({ locale, path: "/about", meta: localize(pageMeta, locale).about });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const content = localize(aboutContent, locale);
  const common = localize(commonContent, locale);
  return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: content.hero.title }]} {...content.hero} /><section className="section-shell"><Container><div className="grid gap-12 lg:grid-cols-2"><SectionHeading description={content.story.description} eyebrow={content.hero.eyebrow} title={content.story.title} /><div className="grid gap-5"><article className="surface-card p-7"><p className="text-sm font-extrabold text-[var(--color-brand-burgundy)]">{content.mission.title}</p><p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{content.mission.description}</p></article><article className="surface-card p-7"><p className="text-sm font-extrabold text-[var(--color-brand-purple)] dark:text-[var(--color-brand-purple-contrast)]">{content.vision.title}</p><p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{content.vision.description}</p></article></div></div></Container></section><section className="section-shell bg-[var(--color-background-subtle)]"><GoldThread className="absolute inset-x-0 top-1 opacity-70" /><Container><SectionHeading align="center" description={content.story.description} eyebrow={content.hero.eyebrow} title={locale === "ar" ? "قيم نعمل بها" : "Values we practice"} /><StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{content.values.map((value, index) => { const Icon = icons[index]; return <StaggerItem key={value.id}><ValueCard description={value.description} icon={<Icon aria-hidden="true" className="h-5 w-5" />} title={value.title} /></StaggerItem>; })}</StaggerGroup></Container></section><section className="section-shell"><Container><div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]"><article className="surface-card p-7"><h2 className="text-2xl font-extrabold text-[var(--color-foreground)]">{content.currentScope.title}</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)]">{content.currentScope.items.map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-gold)]" />{item}</li>)}</ul></article><article className="surface-card p-7"><h2 className="text-2xl font-extrabold text-[var(--color-foreground)]">{content.timeline.title}</h2><p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{content.timeline.description}</p><p className="mt-5 border-s border-[var(--color-brand-gold)] ps-4 text-sm font-semibold text-[var(--color-foreground)]">{content.timeline.note}</p></article></div><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Button href="/faculties">{content.cta.exploreFaculties}</Button><Button href="/volunteer" variant="secondary">{content.cta.volunteer}</Button></div></Container></section></main>;
}
