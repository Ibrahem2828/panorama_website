"use client";

import {
  BellRing,
  ClipboardCheck,
  FileLock2,
  Files,
  Fingerprint,
  LayoutDashboard,
  ListChecks,
  Printer,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { FeatureIcon } from "@/data/features";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featureItems } from "@/data/features";
import { MotionCard } from "@/components/animations/MotionCard";

const icons: Record<FeatureIcon, typeof Fingerprint> = {
  verification: Fingerprint,
  files: Files,
  media: FileLock2,
  groups: UsersRound,
  printing: Printer,
  support: ClipboardCheck,
  notifications: BellRing,
  dashboard: LayoutDashboard,
  audit: ListChecks,
  roles: ShieldCheck,
};

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section className="bg-panorama-background py-16 sm:py-20 dark:bg-white/[0.02]" id="features">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature, idx) => {
            const Icon = icons[feature.icon];
            const item = t.raw(`items.${feature.icon}`) as { title: string; description: string };
            return (
              <MotionCard index={idx} key={feature.icon}>
                <FeatureCard
                  description={item.description}
                  icon={<Icon aria-hidden="true" className="h-6 w-6" />}
                  title={item.title}
                />
              </MotionCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
