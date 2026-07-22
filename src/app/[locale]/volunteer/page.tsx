import type { Metadata } from "next";
import { ArrowUpRight, Check, HeartHandshake, Route, Sparkles, UsersRound } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMailtoLink, site } from "@/config/site";
import { commonContent } from "@/content/common";
import { pageMeta } from "@/content/page-meta";
import { localize } from "@/content/types";
import { volunteerContent } from "@/content/engagement";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
const reasonIcons = [HeartHandshake, Sparkles, UsersRound] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; return createPageMetadata({ locale, path: "/volunteer", meta: localize(pageMeta, locale).volunteer }); }

export default async function VolunteerPage({ params }: PageProps) {
  const { locale } = await params;
  const siteLocale = locale === "en" ? "en" : "ar";
  const common = commonContent[siteLocale];
  const content = volunteerContent[siteLocale];
  const mailto = createMailtoLink(site.contact.volunteerEmail || site.contact.email, siteLocale === "ar" ? "استفسار حول التطوع مع بانوراما" : "Panorama volunteer inquiry");
  return <main id="main-content"><PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).volunteer.title }]} {...content.hero} /><section className="section-shell pt-0"><Container><StaggerGroup className="grid gap-5 lg:grid-cols-3">{content.reasons.map((reason, index) => { const Icon = reasonIcons[index]; return <StaggerItem key={reason.title}><article className="surface-card h-full p-6"><Icon aria-hidden="true" className="h-6 w-6 text-[var(--color-brand-gold)]" /><h2 className="mt-5 text-xl font-extrabold text-[var(--color-foreground)]">{reason.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{reason.description}</p></article></StaggerItem>; })}</StaggerGroup></Container></section><section className="section-shell bg-[var(--color-background-subtle)]"><Container><SectionHeading description={siteLocale === "ar" ? "اختر المجال الأقرب إلى مهاراتك ووقتك، ثم استخدم قناة التواصل المتاحة لتعبّر عن اهتمامك." : "Choose the area closest to your skills and time, then use an available contact channel to express interest."} eyebrow={localize(pageMeta, locale).volunteer.title} title={content.tracksTitle} /><StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{content.tracks.map((track) => <StaggerItem key={track.id}><article className="surface-card h-full p-5"><Route aria-hidden="true" className="h-5 w-5 text-[var(--color-brand-purple)] dark:text-[var(--color-brand-purple-contrast)]" /><h2 className="mt-4 text-lg font-extrabold text-[var(--color-foreground)]">{track.title}</h2><p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{track.description}</p></article></StaggerItem>)}</StaggerGroup></Container></section><section className="section-shell"><Container><div className="max-w-3xl"><SectionHeading description={siteLocale === "ar" ? "نوضح الخطوات المتوقعة حاليًا من دون وعد بقبول أو زمن استجابة." : "We explain the expected steps without promising acceptance or a response time."} eyebrow={localize(pageMeta, locale).volunteer.title} title={siteLocale === "ar" ? "رحلة مشاركة واضحة" : "A clear participation journey"} /><ol className="mt-7 space-y-5">{content.journey.map((step, index) => <li className="flex gap-4" key={step.title}><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-brand-navy)] text-sm font-extrabold text-white dark:bg-[var(--color-brand-purple)]">{index + 1}</span><span><strong className="block text-base text-[var(--color-foreground)]">{step.title}</strong><span className="mt-1 block text-sm leading-7 text-[var(--color-muted)]">{step.description}</span></span></li>)}</ol><article className="mt-8 rounded-[var(--radius-lg)] border border-[color-mix(in_srgb,var(--color-brand-gold)_45%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-brand-gold)_9%,transparent)] p-6"><h2 className="font-extrabold text-[var(--color-foreground)]">{content.expectations.title}</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">{content.expectations.items.map((item) => <li className="flex gap-2" key={item}><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand-gold)]" />{item}</li>)}</ul></article>{mailto ? <Button className="mt-7" href={mailto}>{content.contactCta}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Button> : <Button className="mt-7" href="/contact">{content.contactCta}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Button>}</div></Container></section></main>;
}
