import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import MissionVision from "@/components/about/MissionVision";
import Team from "@/components/about/Team";
import CorporateValues from "@/components/about/CorporateValues";
import CTA from "@/components/sections/CTA";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <CompanyIntro />
            <MissionVision />
            <Team />
            <CorporateValues />
            <CTA />
        </div>
    );
}
