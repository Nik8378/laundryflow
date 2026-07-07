import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { ExperienceShowcase } from "@/components/home/experience-showcase";
import { ServicesGrid } from "@/components/home/services-grid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ExperienceShowcase />
      <ServicesGrid />
    </>
  );
}
