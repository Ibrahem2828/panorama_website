"use client";

import {
  Bell,
  FileCheck2,
  Files,
  GraduationCap,
  Printer,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedHeroVisual } from "@/components/animations/AnimatedHeroVisual";
import { FadeIn } from "@/components/animations/FadeIn";
import { FloatingOrb } from "@/components/animations/FloatingOrb";
import { OrbitRing } from "@/components/animations/OrbitRing";
import { site } from "@/data/site";

const visualItems = [
  { labelKey: "hero.visualVerifiedProfile", icon: FileCheck2 },
  { labelKey: "hero.visualAcademicFiles", icon: Files },
  { labelKey: "hero.visualSubjectGroups", icon: UsersRound },
  { labelKey: "hero.visualPrintingOrders", icon: Printer },
] as const;

export function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24 dark:bg-[#0b1026]">
      <div className="infinity-pattern" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OrbitRing size={400} borderColor="border-panorama-purple/10 dark:border-blue-500/10" />
        <OrbitRing size={300} borderColor="border-panorama-burgundy/10 dark:border-rose-500/10" speed="animate-orbit" />
        <OrbitRing size={200} borderColor="border-panorama-navy/10 dark:border-blue-400/10" speed="animate-orbit" />
        <FloatingOrb className="-top-4 right-1/4" size={16} color="bg-panorama-purple/15 dark:bg-purple-500/20" delay={0} />
        <FloatingOrb className="top-1/3 -left-8" size={24} color="bg-panorama-burgundy/10 dark:bg-rose-500/15" delay={1.5} />
        <FloatingOrb className="bottom-1/4 right-12" size={20} color="bg-panorama-navy/10 dark:bg-blue-500/15" delay={3} />
      </div>
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <FadeIn y={24} delay={0.1}>
          <Badge>
            <span>{isArabic ? t("hero.badge") : "Panorama"}</span>
            <span className={`${isArabic ? "mr-2" : "ml-2"} text-panorama-burgundy`} dir="rtl" lang="ar">
              {isArabic ? "Panorama" : site.arabicName}
            </span>
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-normal text-panorama-text sm:text-5xl lg:text-6xl dark:text-white">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-panorama-muted sm:text-xl dark:text-white/60">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#features">{t("hero.cta")}</Button>
            <Button
              href={`mailto:${site.email}?subject=Panorama%20Demo%20Request`}
              variant="secondary"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </div>
        </FadeIn>

        <AnimatedHeroVisual
          aria-label={isArabic ? "تصور مرئي لتطبيق بانوراما" : "Abstract Panorama app and university operations visual"}
          className="relative min-h-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-soft panorama-grid sm:p-7 dark:border-white/10 dark:bg-white/[0.03]"
          role="img"
        >
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-panorama-purple/10 dark:bg-purple-500/15" />
          <div className="absolute bottom-10 left-8 h-32 w-32 rounded-full bg-panorama-burgundy/10 dark:bg-rose-500/15" />
          <div className="relative mx-auto max-w-md rounded-xl border border-white/80 bg-white/90 p-4 shadow-card backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06]">
            <div className={`flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10 ${isArabic ? "flex-row-reverse" : ""}`}>
              <div className={isArabic ? "text-right" : ""}>
                <p className="text-xs font-bold uppercase text-panorama-muted dark:text-white/50">
                  {t("hero.visualAcademicHub")}
                </p>
                <p className="mt-1 text-lg font-black text-panorama-text dark:text-white">
                  {t("hero.visualWorkspace")}
                </p>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-panorama-navy text-white dark:bg-blue-600">
                <GraduationCap aria-hidden="true" className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              {visualItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className={`flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-3 dark:border-white/10 dark:bg-white/[0.04] ${isArabic ? "flex-row-reverse" : ""}`}
                    key={item.labelKey}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-panorama-navy/10 text-panorama-navy dark:bg-blue-500/15 dark:text-blue-400">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className={`text-sm font-bold text-panorama-text dark:text-white ${isArabic ? "text-right" : ""}`}>
                      {t(item.labelKey)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`absolute ${isArabic ? "bottom-8 left-6 sm:left-10" : "bottom-8 right-6 sm:right-10"} max-w-[15rem] rounded-lg border border-slate-200 bg-white p-4 shadow-card dark:border-white/10 dark:bg-white/[0.06]`}>
            <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-panorama-burgundy/10 text-panorama-burgundy dark:bg-rose-500/15 dark:text-rose-400">
                <Bell aria-hidden="true" className="h-5 w-5" />
              </span>
              <div className={isArabic ? "text-right" : ""}>
                <p className="text-xs font-bold uppercase text-panorama-muted dark:text-white/50">{t("hero.visualNotifications")}</p>
                <p className="text-sm font-black text-panorama-text dark:text-white">{t("hero.visualStructuredUpdates")}</p>
              </div>
            </div>
          </div>

          <div className={`absolute ${isArabic ? "bottom-28 right-4 sm:right-8" : "bottom-28 left-4 sm:left-8"} max-w-[14rem] rounded-lg border border-slate-200 bg-white p-4 shadow-card dark:border-white/10 dark:bg-white/[0.06]`}>
            <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-panorama-purple/10 text-panorama-purple dark:bg-purple-500/15 dark:text-purple-400">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </span>
              <div className={isArabic ? "text-right" : ""}>
                <p className="text-xs font-bold uppercase text-panorama-muted dark:text-white/50">{t("hero.visualAccess")}</p>
                <p className="text-sm font-black text-panorama-text dark:text-white">{t("hero.visualPermissionBased")}</p>
              </div>
            </div>
          </div>
        </AnimatedHeroVisual>
      </Container>
    </section>
  );
}
