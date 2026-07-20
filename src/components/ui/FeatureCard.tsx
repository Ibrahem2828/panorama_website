import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <article className={cn("surface-card group h-full p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-brand-gold)_56%,var(--color-border))] hover:shadow-[var(--shadow-card)]", className)}>
      <span className="grid h-12 w-12 place-items-center rounded-[0.85rem] bg-[color-mix(in_srgb,var(--color-brand-navy)_10%,transparent)] text-[var(--color-brand-navy)] dark:bg-[color-mix(in_srgb,var(--color-brand-purple)_26%,transparent)] dark:text-[var(--color-brand-purple-contrast)]">
        {icon}
      </span>
      <h3 className="mt-5 text-xl font-extrabold leading-snug text-[var(--color-foreground)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      <span aria-hidden="true" className="mt-5 block h-px w-10 bg-[var(--color-brand-gold)] transition-[width] duration-200 group-hover:w-16" />
    </article>
  );
}
