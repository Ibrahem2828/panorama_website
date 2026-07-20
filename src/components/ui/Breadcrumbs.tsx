import { ChevronLeft } from "lucide-react";
import { Link } from "@/i18n/routing";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  label: string;
};

export function Breadcrumbs({ items, label }: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className="mb-7">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
            {index > 0 ? <ChevronLeft aria-hidden="true" className="h-3.5 w-3.5 rtl:rotate-180" /> : null}
            {item.href ? <Link className="transition hover:text-[var(--color-brand-navy)] dark:hover:text-[var(--color-brand-purple-contrast)]" href={item.href}>{item.label}</Link> : <span aria-current="page" className="text-[var(--color-foreground)]">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
