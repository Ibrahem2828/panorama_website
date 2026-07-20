import { CTASection } from "@/components/sections/CTASection";
import { FacultySection } from "@/components/sections/FacultySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { InitiativesPreviewSection } from "@/components/sections/InitiativesPreviewSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StorySection } from "@/components/sections/StorySection";
import { VisionSection } from "@/components/sections/VisionSection";
import { VolunteerPreviewSection } from "@/components/sections/VolunteerPreviewSection";
import { FollowPanorama } from "@/components/social/FollowPanorama";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <StorySection />
      <FacultySection />
      <ServicesSection />
      <InitiativesPreviewSection />
      <VolunteerPreviewSection />
      <ImpactSection />
      <PlatformSection />
      <VisionSection />
      <FollowPanorama />
      <CTASection />
    </main>
  );
}
