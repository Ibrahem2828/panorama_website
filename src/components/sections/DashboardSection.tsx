"use client";

import {
  FileCog,
  History,
  LayoutDashboard,
  Printer,
  Shield,
  TicketCheck,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";

const dashboardIcons = [UserCheck, FileCog, UsersRound, Printer, TicketCheck, History, Shield] as const;

export function DashboardSection() {
  const t = useTranslations("dashboard");

  return (
    <section className="bg-panorama-background py-16 sm:py-20 dark:bg-white/[0.02]" id="dashboard">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              description={t("description")}
              eyebrow={t("eyebrow")}
              title={t("title")}
            />
          </div>

          <FadeIn y={20} delay={0.1}>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
                <div>
                  <p className="text-sm font-bold text-panorama-muted dark:text-white/50">{t("badge")}</p>
                  <p className="mt-1 text-xl font-black text-panorama-text dark:text-white">{t("badgeSubtitle")}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-panorama-navy text-white dark:bg-blue-600">
                  <LayoutDashboard aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {(t.raw("items") as string[]).map((item: string, idx: number) => {
                  const Icon = dashboardIcons[idx];
                  return (
                    <MotionCard
                      className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                      index={idx}
                      key={item}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5 text-panorama-navy dark:text-blue-400" />
                      <p className="mt-3 text-sm font-bold leading-6 text-panorama-text dark:text-white">{item}</p>
                    </MotionCard>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
