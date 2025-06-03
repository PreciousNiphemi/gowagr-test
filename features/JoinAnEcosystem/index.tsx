import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EcosystemCard } from "@/ui-lib/components/EcosystemCard/EcosystemCard";
import { Button } from "@/ui-lib/components/Button/Button";

export const JoinAnEcosystem = () => {
  const headingSize = useBreakpointValue({
    base: "48px",
    md: "3xl",
    lg: "96px",
  });
  const isStackVertical = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      position="relative"
      minHeight={{ base: "120vh", lg: "190vh", xl: "140vh" }}
      height="100%"
      backgroundImage="url('/pattern-background-image.svg')"
      backgroundColor="#E8D4FF"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundBlendMode="multiply"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={{ base: 12, md: 16, lg: 20 }}
      css={{
        "--mask": `
          radial-gradient(34.99px at 50% 48px,#000 99%,#0000 101%) calc(50% - 60px) 0/120px 51% repeat-x,
          radial-gradient(34.99px at 50% -18px,#0000 99%,#000 101%) 50% 30px/120px calc(51% - 30px) repeat-x,
          radial-gradient(34.99px at 50% calc(100% - 48px),#000 99%,#0000 101%) calc(50% - 60px) 100%/120px 51% repeat-x,
          radial-gradient(34.99px at 50% calc(100% + 18px),#0000 99%,#000 101%) 50% calc(100% - 30px)/120px calc(51% - 30px) repeat-x
        `,
        WebkitMask: "var(--mask)",
        mask: "var(--mask)",
      }}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <VStack gap={{ base: 8, md: 12, lg: 16 }} align="center">
          {/* Main Content Section */}
          <VStack gap={{ base: 6, md: 8 }} align="center" textAlign="center">
            {/* Main Heading */}
            <Heading
              as="h1"
              fontSize={headingSize}
              fontWeight={800}
              fontFamily="anek"
              color="#271437"
              lineHeight={{ base: "46px", md: "80px" }}
              letterSpacing="-3%"
              maxW={{ base: "100%", md: "80%", lg: "70%" }}
            >
              JOIN AN ECOSYSTEM THAT KEEPS GIVING
            </Heading>

            {/* Subtitle */}
            <Text
              fontWeight={500}
              fontSize={{ base: "16px", md: "lg", lg: "20px" }}
              fontFamily="eudoxus"
              color="#402562"
              maxW={{ base: "100%", md: "80%", lg: "70%" }}
              lineHeight="relaxed"
            >
              Our values are more than just words—they are the guiding
              principles that shape our company culture, help us navigate
              challenges, and ensure we stay true to our purpose.
            </Text>

            {/* Sign Up Button */}
            <Button variant="primary" size="md">
              Sign Up on Squads 💸
            </Button>
          </VStack>

          {/* Cards Section */}
          <Box
            position="relative"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={{ base: 8, md: 12 }}
          >
            {isStackVertical ? (
              // Mobile/Tablet: Stack cards vertically
              <VStack gap={6} align="center">
                <EcosystemCard
                  variant="promo-cash"
                  transform="rotate(-5deg)"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "rotate(-2deg) scale(1.05)" }}
                />

                <EcosystemCard
                  variant="deposit-boost"
                  transform="rotate(2deg)"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "rotate(0deg) scale(1.05)" }}
                  zIndex={2}
                />

                <EcosystemCard
                  variant="share-code"
                  transform="rotate(-3deg)"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "rotate(0deg) scale(1.05)" }}
                />
              </VStack>
            ) : (
              // Desktop: Fan-style arrangement
              <Box position="relative" width="1000px" height="400px">
                {/* Left Card */}
                <Box position="absolute" left="-80px" top="50px" zIndex={1}>
                  <EcosystemCard
                    variant="promo-cash"
                    transform="rotate(-15deg)"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "rotate(-10deg) scale(1.05)" }}
                  />
                </Box>

                {/* Center Card */}
                <Box
                  position="absolute"
                  left="50%"
                  top="100px"
                  transform="translateX(-50%)"
                  zIndex={3}
                >
                  <EcosystemCard
                    variant="deposit-boost"
                    transform="rotate(5deg)"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "rotate(0deg) scale(1.05)" }}
                  />
                </Box>

                {/* Right Card */}
                <Box position="absolute" right="-60px" top="50px" zIndex={2}>
                  <EcosystemCard
                    variant="share-code"
                    transform="rotate(15deg)"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "rotate(10deg) scale(1.05)" }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
