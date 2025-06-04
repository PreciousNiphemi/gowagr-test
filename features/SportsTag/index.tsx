import {
  Box,
  Container,
  VStack,
  Text,
  HStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Create MotionBox component
const MotionBox = motion(Box);

export const SportsTag = () => {
  const carouselContent = [
    {
      image: "/dribble.svg",
      title: "DRIBBLE",
    },
    {
      image: "/soccer.svg",
      title: "SHOTS",
    },
    {
      image: "/goalie.svg",
      title: "GOAL-SAVES",
    },
    {
      image: "/foul.svg",
      title: "TACKLES",
    },
    {
      image: "/whitsel.svg",
      title: "FOULS",
    },
  ];

  // Create duplicated content for seamless loop
  const duplicatedContent = [
    ...carouselContent,
    ...carouselContent,
    ...carouselContent,
  ];

  return (
    <Box
      w="100%"
      bg="#12DD27"
      h={{ base: "auto", md: "100px", lg: "100px" }}
      clipPath="polygon(0 0, 100% 0, 100% 100%, 0 70%)"
      overflow="hidden"
      position="relative"
      display="flex"
      alignItems="center"
    >
      <MotionBox
        display="flex"
        alignItems="center"
        animate={{
          x: [0, -200 * carouselContent.length],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        gap={8}
        width="max-content"
      >
        {duplicatedContent.map((item, index) => (
          <Flex
            key={`${item.title}-${index}`}
            alignItems="center"
            gap={3}
            minW="200px"
            flex="0 0 auto"
          >
            <Image
              src={item.image}
              alt={item.title}
              w={{ base: "24px", md: "32px", lg: "40px" }}
              h={{ base: "24px", md: "32px", lg: "40px" }}
            />
            <Text
              fontFamily="anek"
              fontSize={{ base: "14px", md: "18px", lg: "24px" }}
              fontWeight={800}
              color="#FFFFFF"
              whiteSpace="nowrap"
            >
              {item.title}
            </Text>
            <Box
              w="4px"
              h="4px"
              bg="#FFFFFF"
              borderRadius="full"
              opacity={0.6}
            />
          </Flex>
        ))}
      </MotionBox>
    </Box>
  );
};
