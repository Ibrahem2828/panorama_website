import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowLeft, HeartHandshake, Layers3, UsersRound } from "lucide-react";
import type { Faculty } from "@/data/faculties";
import type { SiteLocale } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentStatusBadge } from "@/components/ui/ContentStatusBadge";
import { GoldThread } from "@/components/ui/GoldThread";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

type FacultyDetailPageProps = {
  faculty: Faculty;
  locale: SiteLocale;
  labels: { home: string; faculties: string; breadcrumbs: string; backToFaculties: string; participate: string; availability: string; availabilityLabel: string; relationshipTitle: string; relationshipDescription: string; supportTitle: string; groupsTitle: string; platformTitle: string; platformDescription: string };
};

type FacultyStyle = CSSProperties & { "--faculty-accent": string };

const supportIcons = [Layers3, UsersRound, HeartHandshake] as const;

export function FacultyDetailPage({ faculty, locale, labels }: FacultyDetailPageProps) {
  const style: FacultyStyle = { "--faculty-accent": faculty.accent };
  const supportAreas = faculty.supportAreas[locale];

  return (
    <main id="main-content" style={style}>
      <PageHero
        breadcrumbLabel={labels.breadcrumbs}
        breadcrumbs={[{ label: labels.home, href: "/" }, { label: labels.faculties, href: "/faculties" }, { label: faculty.name[locale] }]}
        description={faculty.description[locale]}
        eyebrow={labels.faculties}
        title={faculty.name[locale]}
      />
      <section className="section-shell pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="surface-card relative min-h-64 overflow-hidden p-6 sm:p-8">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-[var(--faculty-accent)]" />
              <div className="relative mx-auto aspect-[1.42] max-w-md"><Image alt={locale === "ar" ? `شعار ${faculty.name[locale]}` : `${faculty.name[locale]} logo`} className="object-contain" fill priority sizes="(max-width: 1024px) 80vw, 35vw" src={faculty.logoPath} /></div>
            </div>
            <div>
              <ContentStatusBadge label={labels.availabilityLabel} status={faculty.availability} />
              <h2 className="section-title max-w-none">{labels.relationshipTitle}</h2>
              <p className="section-description max-w-2xl">{labels.relationshipDescription}</p>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">{faculty.communityPurpose[locale]}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/volunteer">{labels.participate}</Button><Button href="/faculties" variant="secondary">{labels.backToFaculties}<ArrowLeft aria-hidden="true" className="h-4 w-4 rtl:rotate-180" /></Button></div>
            </div>
          </div>
        </Container>
      </section>
      <section className="section-shell bg-[var(--color-background-subtle)]">
        <GoldThread className="absolute inset-x-0 top-1 opacity-70" />
        <Container>
          <SectionHeading description={faculty.communityPurpose[locale]} eyebrow={labels.faculties} title={labels.supportTitle} />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {supportAreas.map((area, index) => {
              const Icon = supportIcons[index];
              return <StaggerItem key={area}><article className="surface-card h-full p-6"><Icon aria-hidden="true" className="h-6 w-6 text-[var(--faculty-accent)]" /><h3 className="mt-5 text-lg font-extrabold text-[var(--color-foreground)]">{area}</h3><p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{labels.groupsTitle}</p></article></StaggerItem>;
            })}
          </StaggerGroup>
        </Container>
      </section>
      <section className="section-shell--compact">
        <Container>
          <div className="surface-card relative overflow-hidden p-7 sm:p-10">
            <span aria-hidden="true" className="absolute -end-10 -top-10 h-44 w-44 rounded-full bg-[var(--faculty-accent)] opacity-10 blur-3xl" />
            <div className="relative max-w-3xl"><p className="text-sm font-extrabold text-[var(--faculty-accent)]">{labels.platformTitle}</p><h2 className="mt-3 text-2xl font-extrabold text-[var(--color-foreground)]">{labels.groupsTitle}</h2><p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{labels.platformDescription}</p></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
