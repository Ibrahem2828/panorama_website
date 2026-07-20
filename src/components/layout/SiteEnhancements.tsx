"use client";

import { BackToTop } from "@/components/layout/BackToTop";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SplashScreen } from "@/components/layout/SplashScreen";

export function SiteEnhancements() {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <BackToTop />
    </>
  );
}
