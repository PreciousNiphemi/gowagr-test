import { JoinAnEcosystem } from "@/features/JoinAnEcosystem";
import { HeroSection } from "@/features/HeroSection";
import { StreetWords } from "@/features/StreetWords";
import { Community } from "@/features/Community";
import { WhyTheStreet } from "@/features/WhyTheStreet";
import { PlayerProjection } from "@/features/PlayerProjection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <PlayerProjection />
      <WhyTheStreet />
      <StreetWords />
      <JoinAnEcosystem />
      <Community />
    </>
  );
}
