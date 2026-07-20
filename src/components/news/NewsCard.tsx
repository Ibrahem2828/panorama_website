import { ArrowUpRight } from "lucide-react";

export type NewsCardItem = { title: string; summary: string; category: string; date?: string; href?: string };

export function NewsCard({ item }: { item: NewsCardItem }) {
  return <article className="surface-card h-full p-6"><p className="text-xs font-extrabold text-[var(--color-brand-burgundy)]">{item.category}</p>{item.date ? <time className="mt-2 block text-xs text-[var(--color-muted)]">{item.date}</time> : null}<h2 className="mt-4 text-xl font-extrabold text-[var(--color-foreground)]">{item.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.summary}</p>{item.href ? <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand-navy)]" href={item.href}>Read update<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a> : null}</article>;
}
