import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import TeamSnippet from "@/components/sections/TeamSnippet";
import MissionVisionSnippet from "@/components/sections/MissionVisionSnippet";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <TeamSnippet />
      <MissionVisionSnippet />
      <CTA />
    </div>
  );
}