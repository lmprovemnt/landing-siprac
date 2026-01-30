import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import CorporateObjectives from "@/components/about/CorporateObjectives";
import CorporateValues from "@/components/about/CorporateValues";
import MissionVision from "@/components/about/MissionVision";
import Team from "@/components/about/Team";
import AboutCTA from "@/components/about/AboutCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <Team />
      <CorporateValues />
      <CorporateObjectives />
      <AboutCTA />
    </div>
  );
}