import type { Metadata } from "next";
import { ArrowUpRight, BookOpenCheck, Compass, MessagesSquare, Sparkles, UsersRound } from "lucide-react";
import { ContentStatusBadge } from "@/components/ui/ContentStatusBadge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { commonContent } from "@/content/common";
import { pageMeta } from "@/content/page-meta";
import { services, servicesContent } from "@/content/services";
import { localize } from "@/content/types";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };
const icons = [BookOpenCheck, UsersRound, Compass, MessagesSquare, Sparkles, BookOpenCheck, UsersRound] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({ locale, path: "/services", meta: localize(pageMeta, locale).services });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const siteLocale = locale === "en" ? "en" : "ar";
  const common = commonContent[siteLocale];
  const content = servicesContent[siteLocale];
  const items = services[siteLocale];
  return (
    <main id="main-content">
      <PageHero breadcrumbLabel={common.breadcrumbs} breadcrumbs={[{ label: common.home, href: "/" }, { label: localize(pageMeta, locale).services.title }]} {...content.hero} />
      <section className="section-shell pt-0">
        <Container>
          <StaggerGroup className="grid gap-5 lg:grid-cols-2">
            {items.map((service, index) => {
              const Icon = icons[index];
              return <StaggerItem key={service.id}><article className="surface-card h-full p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-[0.85rem] bg-[color-mix(in_srgb,var(--color-brand-navy)_10%,transparent)] text-[var(--color-brand-navy)] dark:bg-[color-mix(in_srgb,var(--color-brand-purple)_25%,transparent)] dark:text-[var(--color-brand-purple-contrast)]"><Icon aria-hidden="true" className="h-5 w-5" /></span><ContentStatusBadge label={content.availabilityLabels[service.availability]} status={service.availability} /></div><h2 className="mt-6 text-2xl font-extrabold text-[var(--color-foreground)]">{service.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p><dl className="mt-6 grid gap-4 border-t border-[var(--color-border)] pt-5 text-sm"><div><dt className="font-extrabold text-[var(--color-foreground)]">{siteLocale === "ar" ? "لمن؟" : "For whom?"}</dt><dd className="mt-1 leading-6 text-[var(--color-muted)]">{service.audience}</dd></div><div><dt className="font-extrabold text-[var(--color-foreground)]">{siteLocale === "ar" ? "كيف تساعد؟" : "How it helps"}</dt><dd className="mt-1 leading-6 text-[var(--color-muted)]">{service.howItHelps}</dd></div><div><dt className="font-extrabold text-[var(--color-foreground)]">{siteLocale === "ar" ? "طريقة الوصول" : "How to access"}</dt><dd className="mt-1 leading-6 text-[var(--color-muted)]">{service.access}</dd></div></dl></article></StaggerItem>;
            })}
          </StaggerGroup>
          <div className="mt-10"><Button href="/contact">{content.cta}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Button></div>
        </Container>
      </section>
    </main>
  );
}
