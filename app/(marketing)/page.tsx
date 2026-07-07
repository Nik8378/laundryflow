import { Hero } from "@/components/home/hero";
import { TickerBanner } from "@/components/home/ticker-banner";
import { StatsBand } from "@/components/home/stats-band";
import { ExperienceShowcase } from "@/components/home/experience-showcase";
import { ServicesGrid } from "@/components/home/services-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingPreview } from "@/components/home/pricing-preview";
import { ReviewsMarquee } from "@/components/home/reviews-marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerBanner />
      <StatsBand />
      <ExperienceShowcase />
      <ServicesGrid />
      <HowItWorks />
      <PricingPreview />
      <ReviewsMarquee />
    </>
  );
}
