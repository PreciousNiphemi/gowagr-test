import { Box, Container, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { StreetCards } from "@/ui-lib/components/StreetCards/StreetCards";

export const WhyTheStreet = () => {
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
      backgroundImage="url('/street-fuck-background.svg')"
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundBlendMode="overlay"
    >
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        {/* Header Section */}
        <VStack
          gap={6}
          align="center"
          textAlign="center"
          mb={{ base: 12, lg: 16 }}
        >
          <Box position="relative">
            <Text
              fontSize={{ base: "32px", md: "48px", lg: "64px" }}
              fontWeight={800}
              color="#D2D4D7"
              fontFamily="anek"
              lineHeight="1.1"
              maxW={{ base: "300px", md: "600px", lg: "800px" }}
            >
              WHY THE STREET{" "}
              <Text as="span" color="#D0F091" fontFamily="gloria">
                F**K
              </Text>{" "}
              WITH SQUADS
            </Text>
          </Box>

          <Text
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            fontWeight={500}
            color="#9CA3AF"
            fontFamily="eudoxus"
            textAlign="center"
            maxW="500px"
          >
            Enjoy the swift and sweet benefits squads have for you. We are here
            for you 100% any day anytime!
          </Text>
        </VStack>

        {/* Desktop Layout - Scattered Cards */}
        <Box
          display={{ base: "none", lg: "block" }}
          position="relative"
          height="600px"
          width="100%"
        >
          {/* Numerous Options - Far Left */}
          <Box position="absolute" top="150px" left="5%">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                transition: { duration: 0.3 },
              }}
              initial={{ rotate: -15 }}
            >
              <StreetCards variant="numerous-options" />
            </motion.div>
          </Box>

          {/* Instant Cashout - Left Center */}
          <Box position="absolute" top="50px" left="25%">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
              initial={{ rotate: -5 }}
            >
              <StreetCards variant="instant-cashouts" />
            </motion.div>
          </Box>

          {/* Fast Deposits - Right Center */}
          <Box position="absolute" top="80px" left="45%">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -3,
                transition: { duration: 0.3 },
              }}
              initial={{ rotate: 5 }}
            >
              <StreetCards variant="fast-deposits" />
            </motion.div>
          </Box>

          {/* Bonuses & Rewards - Far Right */}
          <Box position="absolute" top="120px" left="65%">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.3 },
              }}
              initial={{ rotate: 15 }}
            >
              <StreetCards variant="bonus-rewards" />
            </motion.div>
          </Box>
        </Box>

        {/* Mobile Layout - Vertical Stack */}
        <VStack
          display={{ base: "flex", lg: "none" }}
          gap={6}
          align="center"
          width="100%"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <StreetCards variant="numerous-options" />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StreetCards variant="instant-cashouts" />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StreetCards variant="fast-deposits" />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StreetCards variant="bonus-rewards" />
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
};
