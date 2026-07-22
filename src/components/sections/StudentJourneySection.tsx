"use client";

import { ArrowUpRight, BookOpenCheck, HeartHandshake, MessagesSquare, UsersRound } from "lucide-react";
import { useLocale } from "next-intl";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/routing";
import { homeContent } from "@/content/home";

const icons = [UsersRound, BookOpenCheck, HeartHandshake, MessagesSquare] as const;

export function StudentJourneySection() {
  const locale = useLocale();
  const siteLocale = locale === "en" ? "en" : "ar";
  const content = homeContent[siteLocale].journeys;

  return (
    <section aria-labelledby="student-journeys-title" className="section-shell--compact">
      <Container>
        <SectionHeading align="center" description={content.description} eyebrow={content.eyebrow} id="student-journeys-title" title={content.title} />
        <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={item.id}>
                <Link className="surface-card group flex h-full min-h-52 flex-col p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-brand-gold)_56%,var(--color-border))] hover:shadow-[var(--shadow-card)]" href={item.href}>
                  <span className="grid h-11 w-11 place-items-center rounded-[0.85rem] bg-[color-mix(in_srgb,var(--color-brand-navy)_10%,transparent)] text-[var(--color-brand-navy)] dark:bg-[color-mix(in_srgb,var(--color-brand-purple)_26%,transparent)] dark:text-[var(--color-brand-purple-contrast)]"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-[clamp(1.25rem,5vw,1.65rem)] font-extrabold leading-snug text-[var(--color-foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                  <ArrowUpRight aria-hidden="true" className="mt-auto pt-5 h-9 w-9 text-[var(--color-brand-gold)] transition-transform duration-200 group-hover:-translate-y-0.5 rtl:rotate-180" />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
