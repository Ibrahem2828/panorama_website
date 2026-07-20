import type { ReactNode } from "react";

type ValueCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <article className="surface-card h-full p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <span className="grid h-11 w-11 place-items-center rounded-[0.85rem] bg-[color-mix(in_srgb,var(--color-brand-burgundy)_10%,transparent)] text-[var(--color-brand-burgundy)] dark:bg-[color-mix(in_srgb,var(--color-brand-burgundy)_20%,transparent)]">{icon}</span>
      <h3 className="mt-5 text-lg font-extrabold text-[var(--color-foreground)]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </article>
  );
}
