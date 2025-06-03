import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Button as ChakraButton,
} from "@chakra-ui/react";

type PlayerCardProps = {
  name: string;
  imageUrl: string;
  position: string;
  betPoints: number;
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
};

export const PlayerCard = ({
  name,
  imageUrl,
  position,
  game,
  betPoints,
}: PlayerCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box
      w={{ base: "100%", md: "100%", lg: "493px" }}
      h={{ base: "137.35px", md: "137.35px", lg: "137.35px" }}
      display="flex"
      flexDir="row"
      p="12px 16px"
      gap="12px"
      bg="#262F3B"
      rounded="12.26px"
      border="1px solid #2F3843"
      justifyContent="space-between"
    >
      <HStack gap={3}>
        <Image
          src={imageUrl}
          alt={name}
          w={"60.09px"}
          h={"60.09px"}
          rounded="full"
        />
        <VStack alignItems="flex-start" gap={1}>
          <Text
            fontSize="14px"
            fontWeight={700}
            color="#FFFFFF"
            textAlign="left"
            fontFamily="eudoxus"
          >
            {name}
          </Text>
          <Text
            color="#8F949A"
            fontSize="11.04px"
            fontWeight={400}
            fontFamily="eudoxus"
            textAlign="left"
          >
            {game?.awayTeam?.name} - <Text as="span">{position}</Text>
          </Text>
          <Box>
            <Text
              color="#D2D4D7"
              fontSize="11.04px"
              fontWeight={500}
              fontFamily="eudoxus"
              textAlign="left"
            >
              vs. {game?.homeTeam?.name}
            </Text>
            <Text
              color="#D2D4D7"
              fontSize="11.04px"
              fontWeight={500}
              fontFamily="eudoxus"
            >
              {formatDate(game.startDate)}
            </Text>
          </Box>
        </VStack>
      </HStack>
      <HStack gap={3}>
        <Box
          bg="#20262E"
          rounded="6.13px"
          h="101.78px"
          w="101.78px"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <VStack gap={2}>
            <Text
              color="#FFFFFF"
              fontSize="24.53px"
              fontWeight={700}
              fontFamily="eudoxus"
            >
              {betPoints}
            </Text>
            <Box>
              <Text
                color="#797F86"
                fontSize="11.04px"
                fontWeight={400}
                fontFamily="eudoxus"
                textAlign="center"
              >
                Shots on
              </Text>
              <Text
                color="#797F86"
                fontSize="11.04px"
                textAlign="center"
                fontWeight={400}
                fontFamily="eudoxus"
              >
                Target
              </Text>
            </Box>
          </VStack>
        </Box>
        <VStack gap={2}>
          <ChakraButton
            bg="#1F2935"
            color="#FFFFFF"
            p="12px 16px"
            fontSize="14.72px"
            fontWeight={800}
            fontFamily="eudoxus"
            size="sm"
            w={{ base: "84px", md: "84px", lg: "105.46px" }}
            _hover={{ bg: "#2A3847" }}
          >
            More
          </ChakraButton>
          <ChakraButton
            bg="#1F2935"
            color="#FFFFFF"
            p="12px 16px"
            fontSize="14.72px"
            fontWeight={800}
            fontFamily="eudoxus"
            size="sm"
            w={{ base: "84px", md: "84px", lg: "105.46px" }}
            _hover={{ bg: "#2A3847" }}
          >
            Less
          </ChakraButton>
        </VStack>
      </HStack>
    </Box>
  );
};
