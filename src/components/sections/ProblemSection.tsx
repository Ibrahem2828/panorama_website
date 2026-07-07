"use client";

import { AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/animations/MotionCard";

export function ProblemSection() {
  const t = useTranslations("problem");

  return (
    <section className="bg-panorama-background py-16 sm:py-20 dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          description={t("description")}
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(t.raw("items") as string[]).map((item: string, idx: number) => (
            <MotionCard
              className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              index={idx}
              key={item}
            >
              <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-panorama-burgundy/10 text-panorama-burgundy dark:bg-rose-500/15 dark:text-rose-400">
                <AlertCircle aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="text-base font-black text-panorama-text dark:text-white">{item}</h3>
            </MotionCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
