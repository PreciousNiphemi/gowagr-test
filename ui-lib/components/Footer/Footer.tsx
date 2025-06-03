import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  VStack,
  Link,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

export const Footer = () => {
  const navLinks = [
    { label: "How To Play", href: "/how-to-play" },
    { label: "FAQs", href: "/faqs" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Responsible Gaming", href: "/responsible-gaming" },
  ];

  const socialLinks = [
    {
      icon: "/twitter-icon.svg",
      href: "https://twitter.com/squads",
      alt: "Twitter",
    },
    {
      icon: "/tiktok-icon.svg",
      href: "https://tiktok.com/@squads",
      alt: "TikTok",
    },
    {
      icon: "/youtube-icon.svg",
      href: "https://youtube.com/@squads",
      alt: "YouTube",
    },
    {
      icon: "/instagram-icon.svg",
      href: "https://instagram.com/squads",
      alt: "Instagram",
    },
  ];

  return (
    <Box bg="#1A222C" py={{ base: 8, lg: 12 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        {/* Desktop Layout */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          justifyContent="space-between"
          alignItems="flex-start"
          gap={8}
        >
          {/* Left Section - Logo and Description */}
          <VStack align="flex-start" gap={4} maxW="400px">
            <HStack gap={2}>
              <Image src="/squad-footer.svg" alt="Squads" height="32px" />
            </HStack>

            <Text
              fontSize="sm"
              color="#9CA3AF"
              fontFamily="eudoxus"
              lineHeight="1.6"
            >
              Squads Daily Fantasy uses official league statistics provided by
              reputable partners and only includes statistics from sporting
              events the relevant league deems to be official. Squads is not
              affiliated or connected with sports teams, and/or players
              displayed on its platform.
            </Text>

            <Text fontSize="sm" color="#9CA3AF" fontFamily="eudoxus">
              Want to reach us?{" "}
              <Text as="span" color="#D0F091">
                sup@squads.game
              </Text>
            </Text>
          </VStack>

          {/* Right Section - Navigation and Social */}
          <VStack align="flex-end" gap={6}>
            {/* Navigation Links */}
            <HStack gap={8}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  fontSize="sm"
                  color="#D2D4D7"
                  fontFamily="eudoxus"
                  fontWeight={500}
                  _hover={{ color: "#D0F091" }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>

            {/* Social Icons and Age Badge */}
            <HStack gap={6} align="center">
              <HStack gap={4}>
                {socialLinks.map((social) => (
                  <Image
                    src={social.icon}
                    // alt={social.alt}

                    _hover={{ opacity: 0.8 }}
                  />
                ))}
              </HStack>

              <Box
                bg="#374151"
                borderRadius="full"
                width="40px"
                height="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="xs" color="#D2D4D7" fontWeight={700}>
                  18+
                </Text>
              </Box>
            </HStack>

            {/* Copyright */}
            <Text fontSize="xs" color="#6B7280" fontFamily="eudoxus">
              Copyright © 2025 SquadsDFS. All Rights Reserved.
            </Text>
          </VStack>
        </Flex>

        {/* Mobile Layout */}
        <VStack
          display={{ base: "flex", lg: "none" }}
          gap={6}
          align="center"
          textAlign="center"
        >
          {/* Logo */}
          <HStack gap={2}>
            <Image src="/squad-footer.svg" alt="Squads" height="32px" />
          </HStack>

          {/* Description */}
          <Text
            fontSize="sm"
            color="#9CA3AF"
            fontFamily="eudoxus"
            lineHeight="1.6"
            maxW="320px"
          >
            Squads Daily Fantasy uses official league statistics provided by
            reputable partners and only includes statistics from sporting events
            the relevant league deems to be official. Squads is not affiliated
            or connected with sports teams, and/or players displayed on its
            platform.
          </Text>

          {/* Contact */}
          <Text fontSize="sm" color="#9CA3AF" fontFamily="eudoxus">
            Want to reach us?{" "}
            <Text as="span" color="#D0F091">
              sup@squads.game
            </Text>
          </Text>

          {/* Navigation Links */}
          <SimpleGrid columns={1} gap={4}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="sm"
                color="#D2D4D7"
                fontFamily="eudoxus"
                fontWeight={500}
                _hover={{ color: "#D0F091" }}
              >
                {link.label}
              </Link>
            ))}
          </SimpleGrid>

          {/* Social Icons and Age Badge */}
          <HStack gap={6} align="center">
            <HStack gap={4}>
              {socialLinks.map((social) => (
                <Link key={social.alt} href={social.href} target="_blank">
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width="24px"
                    height="24px"
                    _hover={{ opacity: 0.8 }}
                  />
                </Link>
              ))}
            </HStack>

            <Box
              bg="#374151"
              borderRadius="full"
              width="40px"
              height="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xs" color="#D2D4D7" fontWeight={700}>
                18+
              </Text>
            </Box>
          </HStack>

          {/* Copyright */}
          <Text fontSize="xs" color="#6B7280" fontFamily="eudoxus">
            Copyright © 2025 SquadsDFS. All Rights Reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
