"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useLocale } from "next-intl";
import type { Faculty, SiteLocale } from "@/data/faculties";
import { Link } from "@/i18n/routing";

type FacultyCardProps = {
  faculty: Faculty;
};

type FacultyStyle = CSSProperties & { "--faculty-accent": string };

export function FacultyCard({ faculty }: FacultyCardProps) {
  const locale = useLocale() as SiteLocale;
  const style: FacultyStyle = { "--faculty-accent": faculty.accent };

  const card = (
    <article className="surface-card group relative flex min-h-[20rem] flex-col overflow-hidden p-5 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]" style={style}>
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-[var(--faculty-accent)]" />
      <span aria-hidden="true" className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-[var(--faculty-accent)] opacity-[0.09] blur-2xl transition-opacity duration-200 group-hover:opacity-[0.18]" />
      <div className="relative flex min-h-36 flex-1 items-center justify-center rounded-[1rem] bg-[color-mix(in_srgb,var(--faculty-accent)_7%,var(--color-surface-strong))] p-4 dark:bg-[color-mix(in_srgb,var(--faculty-accent)_16%,var(--color-surface-strong))]">
        <Image alt={locale === "ar" ? `شعار ${faculty.name[locale]}` : `${faculty.name[locale]} logo`} className="h-full max-h-32 w-full object-contain" height={2480} loading="lazy" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 22vw" src={faculty.logoPath} width={3508} />
      </div>
      <div className="relative mt-5">
        <h3 className="text-lg font-extrabold leading-snug text-[var(--color-foreground)]">{faculty.name[locale]}</h3>
        <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{faculty.description[locale]}</p>
      </div>
      <span aria-hidden="true" className="relative mt-5 h-px w-12 bg-[var(--faculty-accent)] transition-[width] duration-200 group-hover:w-20" />
    </article>
  );

  if (!faculty.detailPageEnabled) return card;

  return <Link aria-label={locale === "ar" ? `استكشف ${faculty.name[locale]}` : `Explore ${faculty.name[locale]}`} className="block rounded-[var(--radius-lg)]" href={`/faculties/${faculty.slug}`}>{card}</Link>;
}
