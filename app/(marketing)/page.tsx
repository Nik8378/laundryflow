import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { ExperienceShowcase } from "@/components/home/experience-showcase";
import { ServicesGrid } from "@/components/home/services-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingPreview } from "@/components/home/pricing-preview";
import { ReviewsMarquee } from "@/components/home/reviews-marquee";
import { CoverageAreas } from "@/components/home/coverage-areas";
import { FaqAppRow } from "@/components/home/faq-app-row";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ExperienceShowcase />
      <ServicesGrid />
      <HowItWorks />
      <PricingPreview />
      <CoverageAreas />
      <ReviewsMarquee />
      <FaqAppRow />
      <FinalCta />
    </>
  );
}
