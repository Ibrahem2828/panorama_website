"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/content/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-[var(--color-border)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 sm:px-7">
      {items.map((item) => {
        const isOpen = item.id === openId;
        const regionId = `faq-panel-${item.id}`;
        return (
          <section key={item.id}>
            <h2>
              <button aria-controls={regionId} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 py-5 text-start text-base font-extrabold text-[var(--color-foreground)]" onClick={() => setOpenId(isOpen ? null : item.id)} type="button">
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-[var(--color-brand-gold)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h2>
            <div className={isOpen ? "grid grid-rows-[1fr] transition-[grid-template-rows] duration-200" : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-200"} id={regionId} role="region">
              <div className="overflow-hidden"><p className="pb-6 text-sm leading-8 text-[var(--color-muted)]">{item.answer}</p></div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
