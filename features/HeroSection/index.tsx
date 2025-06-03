import {
  Box,
  Text,
  VStack,
  Container,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@/ui-lib/components/Button/Button";

export const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="relative"
      minHeight="100vh"
      backgroundImage="url('/pattern-background-image.svg')"
      backgroundColor="#2C3B4D"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundBlendMode="multiply"
      display="flex"
      flexDirection="column"
      alignItems="center"
      //   justifyContent="space-between"
      overflow="hidden"
    >
      {/* Implement the navigation header part here */}
      <Container
        maxW="container.lg"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 12 }}
        bg={{ base: "#222C38", md: "#222C38", lg: "none" }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {/* Left Navigation Links - Desktop Only */}
          <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap={8}
          >
            <Text
              fontSize="16px"
              fontWeight={700}
              color="#FFFFFF"
              fontFamily="eudoxus"
              cursor="pointer"
              _hover={{ color: "#D0F091" }}
              transition="color 0.2s ease"
            >
              Home
            </Text>
            <Text
              fontSize="16px"
              fontWeight={700}
              color="#D0F091"
              fontFamily="eudoxus"
              cursor="pointer"
              _hover={{ color: "#FFFFFF" }}
              transition="color 0.2s ease"
            >
              Partners
            </Text>
            <Text
              fontSize="16px"
              fontWeight={700}
              color="#FFFFFF"
              fontFamily="eudoxus"
              cursor="pointer"
              _hover={{ color: "#D0F091" }}
              transition="color 0.2s ease"
            >
              How to play
            </Text>
            <Text
              fontSize="16px"
              fontWeight={700}
              color="#FFFFFF"
              fontFamily="eudoxus"
              cursor="pointer"
              _hover={{ color: "#D0F091" }}
              transition="color 0.2s ease"
            >
              FAQs
            </Text>
          </Box>

          {/* Logo - Left on Mobile, Center on Desktop */}
          <Box display={{ base: "block", md: "none" }}>
            <Image src="/squad-logo.svg" alt="Squads Beta" w="auto" h="32px" />
          </Box>

          {/* Center Logo - Desktop Only */}
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
          >
            <Image src="/squad-logo.svg" alt="Squads Beta" w="auto" h="40px" />
          </Box>

          {/* Right Social Media Icons - Desktop Only */}
          <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap={8}
          >
            {/* Twitter Icon */}
            <Box
              cursor="pointer"
              _hover={{ opacity: 0.7 }}
              transition="opacity 0.2s ease"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Box>

            {/* TikTok Icon */}
            <Box
              cursor="pointer"
              _hover={{ opacity: 0.7 }}
              transition="opacity 0.2s ease"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </Box>

            {/* YouTube Icon */}
            <Box
              cursor="pointer"
              _hover={{ opacity: 0.7 }}
              transition="opacity 0.2s ease"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Box>

            {/* Instagram Icon */}
            <Box
              cursor="pointer"
              _hover={{ opacity: 0.7 }}
              transition="opacity 0.2s ease"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <Box display={{ base: "block", md: "none" }} cursor="pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            </svg>
          </Box>
        </Box>
      </Container>

      {/* Decorative Elements */}

      <Box
        position="absolute"
        top={{ base: "20%", md: "30%", lg: "30%" }}
        right={{ base: "-15%", md: "10%", lg: "10%" }}
        width="auto"
        height="auto"
        zIndex={1}
      >
        <Image src="/hero-background-boom.svg" alt="boom" w="auto" h="auto" />
      </Box>

      <Box
        position="absolute"
        bottom={{ base: "0%", md: "10%", lg: "10%" }}
        left={{ base: "8%", md: "8%", lg: "8%" }}
        width="auto"
        height="auto"
        zIndex={1}
      >
        <Image src="/hero-background-fire.svg" alt="fire" w="auto" h="auto" />
      </Box>

      <Box
        position="absolute"
        bottom="20%"
        right={{ base: "10%", md: "10%", lg: "25%" }}
        width={{ base: "21.3px", md: "auto", lg: "auto" }}
        height={{ base: "20.33px", md: "auto", lg: "auto" }}
        transform="rotate(-15deg)"
        zIndex={1}
      >
        <Image src="/orange-spiral.svg" alt="orange spiral" w="auto" h="auto" />
      </Box>

      {/* Decorative vine/squiggle on the left */}
      <Box
        position="absolute"
        top={{ base: "20%", md: "30%", lg: "30%" }}
        left={{ base: "12%", md: "12%", lg: "20%" }}
        width={{ base: "35.11px", md: "auto", lg: "auto" }}
        height={{ base: "20.15px", md: "auto", lg: "auto" }}
        zIndex={1}
      >
        <Image src="/green-spiral.svg" alt="squiggle" w="auto" h="auto" />
      </Box>

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="container.lg" px={{ base: 4, md: 8 }}>
          <VStack gap={8} align="center" textAlign="center">
            {/* Main Heading with Overlapping Pills */}
            <Box position="relative" width="100%">
              <Box
                position="absolute"
                top={{ base: "-20%", md: "-20%", lg: "-20%" }}
                right={{ base: "10%", md: "22%", lg: "22%" }}
                width="auto"
                height="auto"
                zIndex={1}
              >
                <Image
                  src="/hero-section-doodle.svg"
                  alt="doodle"
                  w="auto"
                  h="auto"
                />
              </Box>
              {/* Green Pill - "The New way to" */}
              <Box
                position="relative"
                display="inline-block"
                backgroundColor="#12DD27"
                borderRadius={{ base: "24.12px", md: "25px", lg: "57.65px" }}
                border="1px solid #D0F091"
                pt={{ base: "11.63px", lg: "27.79px" }}
                pb={{ base: "16.55px", lg: "39.55px" }}
                px={{ base: "21.68px", md: "21.68px", lg: "51.81px" }}
                rotate={{ base: "2.83deg", md: "2.83deg", lg: "2.83deg" }}
                zIndex={1}
              >
                <Text
                  fontSize={{ base: "33.77px", md: "80.71px", lg: "80.71px" }}
                  fontWeight={800}
                  color="#104333"
                  fontFamily="eudoxus"
                  lineHeight="1.2"
                >
                  The New way to
                </Text>
              </Box>

              {/* Pink Pill - "Win Money on Sports" */}
              <Box
                position="relative"
                display="inline-block"
                backgroundColor="#FD89ED"
                borderRadius={{ base: "24.12px", md: "25px", lg: "57.65px" }}
                pt={{ base: "11.63px", lg: "27.79px" }}
                pb={{ base: "16.55px", lg: "39.55px" }}
                px={{ base: "21.68px", md: "21.68px", lg: "51.81px" }}
                rotate={{ base: "-2.83deg", md: "-2.83deg", lg: "-2.83deg" }}
                zIndex={2}
              >
                <Box
                  position="absolute"
                  bottom={{ base: "-12%", md: "0%", lg: "-12%" }}
                  left={{ base: "-5%", md: "12%", lg: "-5%" }}
                  width={{ base: "42.58px", md: "auto", lg: "auto" }}
                  height={{ base: "47.91px", md: "auto", lg: "auto" }}
                  zIndex={1}
                >
                  <Image
                    src="/hero-section-glover.svg"
                    alt="glove"
                    w="auto"
                    h="auto"
                  />
                </Box>

                <Text
                  fontSize={{ base: "33.77px", md: "33.77px", lg: "80.71px" }}
                  fontWeight={800}
                  color="#540835"
                  fontFamily="eudoxus"
                  lineHeight="1.2"
                >
                  Win Money on Sports
                </Text>
              </Box>
            </Box>

            <Box w={{ base: "292px", md: "100%", lg: "487px" }}>
              {/* Subtitle */}
              <Text
                fontSize={{ base: "16px", md: "18px", lg: "24px" }}
                fontWeight={500}
                color="#D2D4D7"
                fontFamily="eudoxus"
                letterSpacing={{ base: "0.01em", md: "0.01em", lg: "0.01em" }}
                lineHeight="1.6"
                mt={4}
              >
                Just pick{" "}
                <Text as="span" fontWeight={800}>
                  More
                </Text>{" "}
                or{" "}
                <Text as="span" fontWeight={800}>
                  Less
                </Text>{" "}
                on player stats and win up to{" "}
                <Text as="span" color="#D0F091">
                  100X your cash!
                </Text>{" "}
              </Text>
            </Box>

            {/* CTA Button */}
            <Box mt={6}>
              <Button variant="primary" size="lg">
                <Text
                  color="#2A343F"
                  fontSize={{ base: "16px", md: "17.77px", lg: "17.77px" }}
                  fontWeight={700}
                  fontFamily="eudoxus"
                >
                  Wanna play? Tap in 💸
                </Text>
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
