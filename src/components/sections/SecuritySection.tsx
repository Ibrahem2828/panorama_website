"use client";

import { FileLock2, KeyRound, LockKeyhole, Route, ShieldCheck, UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/animations/MotionCard";

const securityIcons = [FileLock2, KeyRound, UserCheck, Route, LockKeyhole, ShieldCheck] as const;

export function SecuritySection() {
  const t = useTranslations("security");

  return (
    <section className="bg-panorama-text py-16 text-white sm:py-20 dark:bg-[#060a18]" id="security">
      <Container>
        <SectionHeading
          align="center"
          className="[&_*]:text-white [&_p]:text-white/70 dark:[&_p]:text-white/60"
          description={t("description")}
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(t.raw("items") as string[]).map((item: string, idx: number) => {
            const Icon = securityIcons[idx];
            return (
              <MotionCard
                className="rounded-lg border border-white/10 bg-white/5 p-5 dark:border-white/10 dark:bg-white/[0.03]"
                index={idx}
                key={item}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-white" />
                <h3 className="mt-4 text-lg font-black">{item}</h3>
              </MotionCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
