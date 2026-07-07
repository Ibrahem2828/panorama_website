"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="bg-panorama-background py-16 sm:py-20 dark:bg-white/[0.02]" id="contact">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-panorama-navy px-6 py-12 text-center text-white shadow-soft sm:px-10 sm:py-16 dark:bg-blue-600/20 dark:border dark:border-blue-500/20">
          <div className="absolute inset-0 opacity-35 panorama-grid" />
          <div className="absolute inset-0 bg-gradient-to-br from-panorama-purple/10 via-transparent to-panorama-burgundy/10 dark:from-purple-500/10 dark:to-rose-500/10" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                className="bg-white text-panorama-navy hover:bg-slate-100 dark:bg-white dark:text-panorama-navy"
                href={`mailto:${site.email}?subject=Panorama%20Demo%20Request`}
              >
                {t("button")}
              </Button>
              <Button
                className="border-white/35 bg-transparent text-white hover:bg-white/10 dark:border-white/25"
                href={`mailto:${site.email}?subject=Contact%20Panorama%20Team`}
                variant="secondary"
              >
                {t("buttonSecondary")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
