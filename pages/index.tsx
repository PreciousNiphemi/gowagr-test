import { JoinAnEcosystem } from "@/features/JoinAnEcosystem";
import { HeroSection } from "@/features/HeroSection";
import { Win100xCash } from "@/features/Win100xCash";
import { StreetWords } from "@/features/StreetWords";
import { Community } from "@/features/Community";
import { WhyTheStreet } from "@/features/WhyTheStreet";
import { PlayerProjection } from "@/features/PlayerProjection";
import { SportsTag } from "@/features/SportsTag";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Win100xCash />
      <SportsTag />
      <PlayerProjection />

      <WhyTheStreet />
      <StreetWords />
      <JoinAnEcosystem />
      <Community />
    </>
  );
}
