import { Box, Container, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const StreetWords = () => {
  const streetImages = [
    "/street-1.svg",
    "/street-2.svg",
    "/street-3.svg",
    "/street-4.svg",
    "/street-5.svg",
    "/street-6.svg",
    "/street-7.svg",
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedImages = [...streetImages, ...streetImages];

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
    >
      <Container maxW="container.lg" px={{ base: 4, md: 8, lg: 8 }}>
        <VStack gap={6} align="center" textAlign="center">
          <Box position="relative">
            <Text
              fontSize={{ base: "48px", md: "48px", lg: "64px" }}
              fontWeight={800}
              color="#D2D4D7"
              fontFamily="anek"
              lineHeight="1"
              maxW={{ base: "365px", md: "644px", lg: "644px" }}
            >
              Words on the street
            </Text>

            <Image
              src="/underline.svg"
              alt="Street Words"
              position="absolute"
              right="0"
              bottom="0"
            />
          </Box>
        </VStack>
      </Container>

      {/* Continuous Carousel - Two Rows */}
      <Box
        width="100%"
        overflow="hidden"
        mt={{ base: 8, md: 12, lg: 16 }}
        position="relative"
      >
        {/* First Row - Scrolling Right */}
        <Box mb={6}>
          <motion.div
            style={{
              display: "flex",
              gap: "24px",
              width: "fit-content",
            }}
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...duplicatedImages, ...duplicatedImages].map((image, index) => (
              <Box
                key={`row1-${image}-${index}`}
                flexShrink={0}
                //   width={{ base: "280px", md: "320px", lg: "360px" }}
                //   height={{ base: "400px", md: "450px", lg: "500px" }}
              >
                <Image
                  src={`${image}`}
                  alt={`Street post ${(index % streetImages.length) + 1}`}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  draggable={false}
                />
              </Box>
            ))}
          </motion.div>
        </Box>

        {/* Second Row - Scrolling Left */}
        <Box>
          <motion.div
            style={{
              display: "flex",
              gap: "24px",
              width: "fit-content",
            }}
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...duplicatedImages, ...duplicatedImages].map((image, index) => (
              <Box key={`row2-${image}-${index}`} flexShrink={0}>
                <Image
                  src={`${image}`}
                  alt={`Street post ${(index % streetImages.length) + 1}`}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  draggable={false}
                />
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>

      {/* Gradient overlays for smooth edge effect */}
      <Box
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        width="100px"
        height="600px"
        background="linear-gradient(to right, #151c24, transparent)"
        pointerEvents="none"
        zIndex={2}
      />
      <Box
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        width="100px"
        height="600px"
        background="linear-gradient(to left, #151c24, transparent)"
        pointerEvents="none"
        zIndex={2}
      />
    </Box>
  );
};
