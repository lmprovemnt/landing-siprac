import Hero from "@/components/sections/Hero";
import MissionVisionSnippet from "@/components/sections/MissionVisionSnippet";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import TeamSnippet from "@/components/sections/TeamSnippet";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MissionVisionSnippet />
      <Services />
      <Benefits />
      <TeamSnippet />
      <CTA />
    </div>
  );
}