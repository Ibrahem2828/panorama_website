"use client";

import { Building2, GraduationCap, MapPinned, Palette } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/animations/MotionCard";

const identityIcons = [Building2, GraduationCap, MapPinned, Palette] as const;

export function IdentitySection() {
  const t = useTranslations("identity");

  return (
    <section className="relative bg-white py-16 sm:py-20 dark:bg-[#0b1026]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-panorama-purple/10 dark:border-purple-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-panorama-navy/10 dark:border-blue-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-panorama-purple/5 dark:bg-purple-500/5 blur-3xl" />
      </div>
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <SectionHeading
            description={t("description")}
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {(t.raw("items") as string[]).map((item: string, idx: number) => {
              const Icon = identityIcons[idx];
              return (
                <MotionCard
                  className="rounded-xl border border-slate-200 bg-panorama-background p-6 dark:border-white/10 dark:bg-white/[0.04]"
                  index={idx}
                  key={item}
                >
                  <Icon aria-hidden="true" className="h-7 w-7 text-panorama-burgundy dark:text-rose-400" />
                  <h3 className="mt-5 text-xl font-black text-panorama-text dark:text-white">{item}</h3>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
