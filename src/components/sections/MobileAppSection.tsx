"use client";

import { Bell, FileText, LifeBuoy, Printer, Smartphone, UserCheck, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const studentIcons = [FileText, UsersRound, Printer, Bell, LifeBuoy, UserCheck] as const;

export function MobileAppSection() {
  const t = useTranslations("mobile");

  return (
    <section className="bg-white py-16 sm:py-20 dark:bg-[#0b1026]" id="mobile-app">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1fr] lg:items-center">
          <FadeIn y={20} delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-[2rem] border border-slate-200 bg-panorama-text p-3 shadow-soft dark:border-white/15 dark:bg-[#060a18]">
                <div className="rounded-[1.55rem] bg-white p-4 dark:bg-[#0f1428]">
                  <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-200 dark:bg-white/20" />
                  <div className="rounded-lg bg-panorama-navy p-5 text-white dark:bg-blue-600">
                    <Smartphone aria-hidden="true" className="h-7 w-7" />
                    <p className="mt-6 text-2xl font-black">{t("appTitle")}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{t("appSubtitle")}</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {(t.raw("items") as string[]).slice(0, 4).map((item: string, idx: number) => {
                      const Icon = studentIcons[idx];
                      return (
                        <div
                          className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.04]"
                          key={item}
                        >
                          <Icon aria-hidden="true" className="h-5 w-5 text-panorama-navy dark:text-blue-400" />
                          <span className="text-sm font-bold text-panorama-text dark:text-white">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <div>
            <SectionHeading
              description={t("description")}
              eyebrow={t("eyebrow")}
              title={t("title")}
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(t.raw("items") as string[]).map((item: string, idx: number) => {
                const Icon = studentIcons[idx];
                return (
                  <div className="flex items-start gap-3 rounded-lg bg-panorama-background p-4 dark:bg-white/[0.04]" key={item}>
                    <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-panorama-purple dark:text-purple-400" />
                    <span className="text-sm font-bold leading-6 text-panorama-text dark:text-white">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
