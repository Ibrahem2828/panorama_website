import { CircleCheck, Clock3, Laptop2, Timer } from "lucide-react";
import type { AvailabilityStatus } from "@/content/types";
import { cn } from "@/lib/cn";

type ContentStatusBadgeProps = {
  status: AvailabilityStatus;
  label: string;
};

const icons = {
  available: CircleCheck,
  limited: Clock3,
  digital: Laptop2,
  comingSoon: Timer,
} as const;

const classes = {
  available: "border-[color-mix(in_srgb,var(--color-success)_35%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-success)_10%,transparent)] text-[var(--color-success)]",
  limited: "border-[color-mix(in_srgb,var(--color-warning)_35%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-warning)_10%,transparent)] text-[var(--color-warning)]",
  digital: "border-[color-mix(in_srgb,var(--color-brand-purple)_35%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-brand-purple)_10%,transparent)] text-[var(--color-brand-purple)] dark:text-[var(--color-brand-purple-contrast)]",
  comingSoon: "border-[color-mix(in_srgb,var(--color-brand-gold)_45%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-brand-gold)_12%,transparent)] text-[var(--color-brand-navy)] dark:text-[var(--color-brand-gold-contrast)]",
} as const;

export function ContentStatusBadge({ status, label }: ContentStatusBadgeProps) {
  const Icon = icons[status];
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-extrabold", classes[status])}><Icon aria-hidden="true" className="h-3.5 w-3.5" />{label}</span>;
}
