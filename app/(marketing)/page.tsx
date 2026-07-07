import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { ExperienceShowcase } from "@/components/home/experience-showcase";
import { ServicesGrid } from "@/components/home/services-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingPreview } from "@/components/home/pricing-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ExperienceShowcase />
      <ServicesGrid />
      <HowItWorks />
      <PricingPreview />
    </>
  );
}
