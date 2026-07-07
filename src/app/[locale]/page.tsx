import { CTASection } from "@/components/sections/CTASection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { MobileAppSection } from "@/components/sections/MobileAppSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { SolutionSection } from "@/components/sections/SolutionSection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <MobileAppSection />
      <DashboardSection />
      <SecuritySection />
      <IdentitySection />
      <CTASection />
    </main>
  );
}
