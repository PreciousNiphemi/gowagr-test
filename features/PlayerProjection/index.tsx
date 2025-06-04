import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { PlayerCard } from "@/ui-lib/components/PlayerCard/PlayerCard";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Player = {
  groupId: string;
  player: {
    id: string;
    name: string;
    imageUrl: string;
    position: string;
    team: {
      id: string;
    };
  };
  game: {
    id: string;
    status: string;
    isLive: boolean;
    startDate: string;
    league: string;
    homeTeam: {
      id: string;
      name: string;
      abbreviation: string;
      nickname: string;
    };
    awayTeam: {
      id: string;
      name: string;
      abbreviation: string;
      nickname: string;
    };
  };
  props: Array<{
    lines: Array<{
      id: string;
      selectionLine: string;
      isAvailable: boolean;
    }>;
    betPoints: number;
    type: string;
  }>;
};

export const PlayerProjection = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const fetchPlayers = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/api/players?marketType=player_shots_on_target&size=30`
      );
      const data = await response.json();
      setPlayers(data.props);
    } catch (error) {
      console.error("Error fetching players:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  // Split players into 4 rows
  const rowSize = Math.ceil(players.length / 4);
  const rows = [
    players.slice(0, rowSize),
    players.slice(rowSize, rowSize * 2),
    players.slice(rowSize * 2, rowSize * 3),
    players.slice(rowSize * 3, rowSize * 4),
  ];

  // Calculate animation distances based on container width
  const getAnimationDistance = (index: number) => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    return index % 2 === 0 ? -containerWidth : containerWidth;
  };

  return (
    <Box
      minHeight="100vh"
      backgroundColor="#151c24"
      py={{ base: 8, md: 12, lg: 16 }}
      position="relative"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      clipPath="polygon(0 0, 100% 30%, 100% 100%, 0 100%)"
      mt="-30px"
    >
      <Container
        maxW="container.xl"
        px={{ base: 4, md: 8, lg: 8 }}
        ref={containerRef}
        // transform="skewY(-2deg)"
        w="100%"
      >
        <Flex justifyContent="flex-start" alignItems="center" mb={8}>
          <Box maxW={{ base: "365px", md: "365px", lg: "638px" }}>
            <Text
              fontSize={{ base: "48px", md: "48px", lg: "72px" }}
              fontWeight={800}
              color="#FFFFFF"
              fontFamily="anek"
              lineHeight="1"
            >
              NUMEROUS PLAYERS{" "}
              <Text
                as="span"
                fontSize={{ base: "36px", md: "36px", lg: "63.08px" }}
                fontWeight={400}
                color="#D0F091"
                fontFamily="gloria"
                textAlign="center"
              >
                projections
              </Text>
            </Text>

            <Text
              fontSize={{ base: "16px", md: "16px", lg: "20px" }}
              fontWeight={500}
              color="#D2D4D7"
              fontFamily="eudoxus"
            >
              Available player stats categories for you to pick from: Shots,
              goals, assists, saves, passes, and more.
            </Text>
          </Box>
        </Flex>

        <VStack gap={8}>
          {rows.map((rowPlayers, index) => (
            <Box
              key={index}
              width="100%"
              overflow="hidden"
              position="relative"
              height="140px"
            >
              <motion.div
                style={{
                  display: "flex",
                  gap: "16px",
                  width: "fit-content",
                  position: "absolute",
                  left: index % 2 === 0 ? "0" : "auto",
                  right: index % 2 === 0 ? "auto" : "0",
                }}
                animate={{
                  x: [0, getAnimationDistance(index)],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {/* Double the cards to create seamless loop */}
                {[...rowPlayers, ...rowPlayers, ...rowPlayers].map(
                  (playerData) => (
                    <PlayerCard
                      key={`${playerData.groupId}-${Math.random()}`}
                      name={playerData.player.name}
                      imageUrl={playerData.player.imageUrl}
                      position={playerData.player.position}
                      game={playerData.game}
                      betPoints={playerData.props[0]?.betPoints}
                    />
                  )
                )}
              </motion.div>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};
