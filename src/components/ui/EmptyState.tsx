import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: { label: string; href: string };
  className?: string;
};

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <section className={cn("surface-card mx-auto max-w-2xl p-8 text-center sm:p-10", className)}>
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-brand-gold)_13%,transparent)] text-[var(--color-brand-gold)]"><Inbox aria-hidden="true" className="h-6 w-6" /></span>
      <h2 className="mt-5 text-2xl font-extrabold text-[var(--color-foreground)]">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      {action ? <Button className="mt-6" href={action.href} variant="secondary">{action.label}</Button> : null}
    </section>
  );
}
