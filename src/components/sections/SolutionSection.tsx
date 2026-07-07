"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

export function SolutionSection() {
  const t = useTranslations("solution");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="bg-white py-16 sm:py-20 dark:bg-[#0b1026]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <SectionHeading
            description={t("description")}
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
          <FadeIn y={20} delay={0.1}>
            <div className="rounded-lg bg-panorama-navy p-6 text-white shadow-soft sm:p-8 dark:bg-blue-600/20 dark:border dark:border-blue-500/20">
              <div className={`flex items-center gap-3 text-white/70 ${isArabic ? "flex-row-reverse" : ""}`}>
                <span className="h-px flex-1 bg-white/20" />
                <ArrowRight aria-hidden="true" className={`h-5 w-5 ${isArabic ? "rotate-180" : ""}`} />
              </div>
              <div className="mt-8 grid gap-4">
                {(t.raw("points") as string[]).map((point: string) => (
                  <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`} key={point}>
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-white" />
                    <span className="font-bold">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
