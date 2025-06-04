import {
  Box,
  Text,
  VStack,
  HStack,
  Container,
  Image,
  Button as ChakraButton,
  Flex,
} from "@chakra-ui/react";
import { Button } from "@/ui-lib/components/Button/Button";
import { PlayerCard } from "@/ui-lib/components/PlayerCard/PlayerCard";
import { BlogCard } from "@/ui-lib/components/BlogCard/BlogCard";
import { Footer } from "@/ui-lib/components/Footer/Footer";

const dummyPlayerData = {
  name: "Marcus Rashford",
  imageUrl:
    "https://assets.squads.game/player-images/963640b2-5021-4b39-bf21-2b9c7a90894c.png",
  position: "Forward",
  game: {
    id: "123",
    status: "Scheduled",
    isLive: false,
    startDate: "Dec 24, 2023",
    league: "Premier League",
    homeTeam: {
      id: "456",
      name: "Manchester United",
      abbreviation: "MUN",
      nickname: "Red Devils",
    },
    awayTeam: {
      id: "789",
      name: "Liverpool",
      abbreviation: "LIV",
      nickname: "Reds",
    },
  },
};

const dummyBlogData = [
  {
    id: "1",
    tag: "News",
    tagColor: "#218208",
    title: "Top 10 Premier League Predictions for 2024",
    description:
      "Expert analysis and predictions for the upcoming Premier League season, including potential champions and relegation battles.",
    imageUrl: "/blog-1.svg",
  },
  {
    id: "2",
    tag: "Tips",
    tagColor: "#FD89ED",
    title: "The Rise of Young Talents in European Football",
    description:
      "A deep dive into emerging stars who are making waves across Europe's top leagues and shaping the future of football.",
    imageUrl: "/blog-2.svg",
  },
  {
    id: "3",
    tag: "News",
    tagColor: "#6DE0E7",
    title: "Tactical Evolution: Modern Football Formations",
    description:
      "Understanding how tactical innovations and formation changes have transformed the beautiful game in recent years.",
    imageUrl: "/blog-3.svg",
  },
];

export const Community = () => {
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
      {/* Decorative Elements */}
      {/* <Box
        position="absolute"
        top="10%"
        left="5%"
        width="30px"
        height="30px"
        backgroundColor="#9F7AEA"
        borderRadius="6px"
        transform="rotate(45deg)"
        zIndex={1}
      />

      <Box
        position="absolute"
        bottom="20%"
        right="8%"
        width="40px"
        height="40px"
        backgroundColor="#F6E05E"
        borderRadius="full"
        zIndex={1}
      /> */}

      <Container maxW="container.lg" px={{ base: 4, md: 8, lg: 8 }}>
        <VStack gap={{ base: 12, md: 16, lg: 20 }} align="center">
          {/* Header Section */}
          <VStack gap={6} align="center" textAlign="center">
            <Box>
              <Text
                fontSize={{ base: "48px", md: "48px", lg: "96px" }}
                fontWeight={800}
                color="#FFFFFF"
                fontFamily="anek"
                lineHeight="1"
                maxW={{ base: "365px", md: "800px", lg: "810px" }}
              >
                START WINNING WITH THE SQUAD
              </Text>

              <Text
                fontSize={{ base: "16px", md: "18px", lg: "19.69px" }}
                fontWeight={500}
                color="#D2D4D7"
                fontFamily="eudoxus"
                textAlign="center"
                // maxW="600px"
              >
                From signing up to winning your first entry, it only takes a few
                steps
              </Text>
            </Box>

            <Box mt={4}>
              <Button variant="primary" size="lg">
                <Text
                  color="#1A222C"
                  fontSize={{ base: "14px", md: "16px", lg: "22px" }}
                  fontWeight={700}
                  fontFamily="eudoxus"
                >
                  Join the community
                </Text>
              </Button>
            </Box>
          </VStack>

          {/* Main Steps Section */}
          <Box
            display="flex"
            rounded={{ base: "18px", md: "20px", lg: "25px" }}
            flexDirection={{ base: "column", lg: "column" }}
            flexWrap="wrap"
            gap={{ base: 8, lg: 12 }}
            py={{ base: 4, md: 8, lg: 8 }}
            px={{ base: 4, md: 8, lg: 8 }}
            alignItems={{ base: "center", lg: "flex-start" }}
            justifyContent="center"
            width="100%"
            minH={{ base: "auto", md: "auto", lg: "1069px" }}
            bg="#232D39"
          >
            <Flex
              w="100%"
              gap={4}
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={{ base: "center", lg: "center" }}
            >
              {/* Step 1: Join Community */}
              <Box
                // backgroundColor="yellow.500"
                bg="#1F2935"
                borderRadius={{ base: "18px", md: "20px", lg: "24.61px" }}
                p={{ base: 6, md: 8 }}
                width={{ base: "100%", md: "400px", lg: "386.45px" }}
                height={{ base: "auto", lg: "400px" }}
                display="flex"
                flexDirection="column"
                // alignItems="center"
                // textAlign="center"
                position="relative"
              >
                {/* Checkmark Icon */}
                <Box>
                  <Image
                    src="/checkmark.svg"
                    alt="Check"
                    width={{
                      base: "104.45px",
                      md: "104.45px",
                      lg: "auto",
                    }}
                    height={{
                      base: "109.89px",
                      md: "109.89px",
                      lg: "auto",
                    }}
                  />
                </Box>
                <Box px={{ base: "auto", md: 8, lg: "18px" }}>
                  <ChakraButton
                    bg="#2F3843"
                    color="#D2D4D7"
                    p="12px 16px"
                    fontSize="12px"
                    fontWeight={800}
                    fontFamily="eudoxus"
                    size="sm"
                    w={{ base: "84px", md: "84px", lg: "84px" }}
                  >
                    Register
                  </ChakraButton>
                  <Text
                    fontSize={{ base: "20px", md: "24px", lg: "26px" }}
                    fontWeight={700}
                    color="#D2D4D7"
                    fontFamily="eudoxus"
                    lineHeight="1.3"
                    my={4}
                  >
                    Join the Squads Community
                  </Text>

                  <Text
                    fontSize="14px"
                    fontWeight={500}
                    color="#B6B8BB"
                    fontFamily="eudoxus"
                    lineHeight="1.6"
                  >
                    Create your account in seconds with just your name and email
                    address
                  </Text>
                </Box>
              </Box>

              {/* Step 2: Mobile App Demo */}
              <Box
                position="relative"
                display="flex"
                bg="#1F2935"
                borderRadius={{ base: "18px", md: "20px", lg: "24.61px" }}
                pr={{ base: 6, md: 8 }}
                pl={{ base: 6, md: 8, lg: 0 }}
                gap={{ base: 4, md: 8, lg: 12 }}
                flexDirection={{ base: "column", lg: "row" }}
                alignItems="center"
                justifyContent={{ base: "center", lg: "flex-start" }}
                width={{ base: "100%", md: "400px", lg: "581.73px" }}
                height={{ base: "auto", lg: "414.35px" }}
              >
                <Image
                  src="/fund-your-account-phone.svg"
                  alt="Fund Your Account"
                  width={{ base: "100%", md: "400px", lg: "auto" }}
                  height={{ base: "auto", lg: "auto" }}
                />
                <Box>
                  <ChakraButton
                    bg="#2F3843"
                    color="#D2D4D7"
                    p="12px 16px"
                    fontSize="12px"
                    fontWeight={800}
                    fontFamily="eudoxus"
                    size="sm"
                    w={{ base: "84px", md: "84px", lg: "84px" }}
                  >
                    Fund Wallet
                  </ChakraButton>
                  <Text
                    fontSize={{ base: "20px", md: "24px", lg: "26px" }}
                    fontWeight={700}
                    color="#D2D4D7"
                    fontFamily="eudoxus"
                    lineHeight="1.3"
                    my={4}
                  >
                    Fund Your Account
                  </Text>

                  <Text
                    fontSize="14px"
                    fontWeight={500}
                    color="#B6B8BB"
                    fontFamily="eudoxus"
                    lineHeight="1.6"
                    textAlign="left"
                  >
                    Deposit funds instantly using your preferred payment method
                    to create an entry. All our payment methods are fast &
                    secure.
                  </Text>
                </Box>
              </Box>
            </Flex>

            <Flex
              w="100%"
              gap={4}
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={{ base: "center", lg: "center" }}
            >
              {/* Step 3: Fund Account */}
              <Box
                position="relative"
                display="flex"
                bg="#1F2935"
                borderRadius={{ base: "18px", md: "20px", lg: "24.61px" }}
                p={{ base: 6, md: 8 }}
                gap={{ base: 4, md: 8, lg: 12 }}
                flexDirection={{ base: "column", lg: "column" }}
                alignItems="center"
                justifyContent={{ base: "center", lg: "flex-start" }}
                width={{ base: "100%", md: "400px", lg: "581.73px" }}
                height={{ base: "auto", lg: "414.35px" }}
              >
                <Box h={{ base: "167.89px", md: "167.89px", lg: "167.89px" }}>
                  <Image
                    src="/osimen.svg"
                    alt="Osimen"
                    position="absolute"
                    left={{ base: "0px", md: "0px", lg: "0px" }}
                    // top={{ base: "0px", md: "0px", lg: "0px" }}
                    width={{ base: "auto", md: "auto", lg: "auto" }}
                    height={{ base: "auto", lg: "" }}
                  />
                </Box>
                <Box>
                  <ChakraButton
                    bg="#2F3843"
                    color="#D2D4D7"
                    p="12px 16px"
                    fontSize="12px"
                    fontWeight={800}
                    fontFamily="eudoxus"
                    size="sm"
                    w={{ base: "84px", md: "84px", lg: "84px" }}
                  >
                    Picks
                  </ChakraButton>
                  <Text
                    fontSize={{ base: "20px", md: "24px", lg: "26px" }}
                    fontWeight={700}
                    color="#D2D4D7"
                    fontFamily="eudoxus"
                    lineHeight="1.3"
                    my={4}
                  >
                    Create your entry
                  </Text>

                  <Text
                    fontSize="14px"
                    fontWeight={500}
                    color="#B6B8BB"
                    fontFamily="eudoxus"
                    lineHeight="1.6"
                    textAlign="left"
                  >
                    Browse the players market, pick more or less on available
                    players and create your entry.
                  </Text>
                </Box>
              </Box>

              <Box
                // backgroundColor="yellow.500"
                bg="#1F2935"
                borderRadius={{ base: "18px", md: "20px", lg: "24.61px" }}
                px={{ base: 6, md: 8 }}
                pt={{ base: 6, md: 8 }}
                width={{ base: "100%", md: "400px", lg: "386.45px" }}
                height={{ base: "auto", lg: "400px" }}
                display="flex"
                flexDirection="column"
                // alignItems="center"
                justifyContent="space-between"
                // textAlign="center"
                position="relative"
              >
                <Box px={{ base: "auto", md: 8, lg: "18px" }}>
                  <ChakraButton
                    bg="#2F3843"
                    color="#D2D4D7"
                    p="12px 16px"
                    fontSize="12px"
                    fontWeight={800}
                    fontFamily="eudoxus"
                    size="sm"
                    w={{ base: "84px", md: "84px", lg: "84px" }}
                  >
                    Cash out
                  </ChakraButton>
                  <Text
                    fontSize={{ base: "20px", md: "24px", lg: "26px" }}
                    fontWeight={700}
                    color="#D2D4D7"
                    fontFamily="eudoxus"
                    lineHeight="1.3"
                    my={4}
                  >
                    Win & Cash Out Instantly
                  </Text>

                  <Text
                    fontSize="14px"
                    fontWeight={500}
                    color="#B6B8BB"
                    fontFamily="eudoxus"
                    lineHeight="1.6"
                  >
                    Your entry is looking green? Withdraw straight to your bank
                    account with ease
                  </Text>
                </Box>

                {/* Tom and jerry Image layers */}
                <Box
                  display="flex"
                  flexDirection="row"
                  position="relative"
                  height={{ base: "239.27px", lg: "100%" }}
                >
                  {/* Left Jerry Card - Bottom layer */}

                  <Image
                    src="/left-jerry.svg"
                    alt="Left Jerry"
                    position="absolute"
                    bottom={{ base: "0px", md: "0px", lg: "0px" }}
                    left={{ base: "0px", md: "0px", lg: "0px" }}
                    zIndex={1}
                  />

                  {/* Center Jerry Card - Middle layer */}

                  <Image
                    position="absolute"
                    zIndex={4}
                    bottom="0px"
                    right="25%"
                    src="/center-jerry.svg"
                    alt="Center Jerry"
                    width={{ base: "auto", md: "auto", lg: "auto" }}
                  />

                  {/* Right Jerry Card - Top layer */}

                  <Image
                    src="/right-jerry.svg"
                    alt="Right Jerry"
                    position="absolute"
                    bottom="0px"
                    right="0px"
                    zIndex={1}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </VStack>

        <VStack
          gap={6}
          mt={{ base: 12, md: 12, lg: "6rem" }}
          align="center"
          textAlign="center"
        >
          <Box>
            <Text
              fontSize={{ base: "48px", md: "48px", lg: "64px" }}
              fontWeight={800}
              color="#FFFFFF"
              fontFamily="anek"
              lineHeight="1"
              maxW={{ base: "365px", md: "800px", lg: "810px" }}
            >
              Latest from the{" "}
              <Text as="span" color="#D0F091" fontFamily="gloria">
                Gang
              </Text>
            </Text>

            <Text
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              fontWeight={500}
              color="#D9D9D9"
              fontFamily="onest"
              textAlign="center"
              // maxW="600px"
            >
              Subscribe to get latest yap from Wadmin
            </Text>
          </Box>

          <Box>
            <Flex
              justifyContent="space-between"
              w="100%"
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              gap={{ base: 8, md: 8, lg: 8 }}
              px={{ base: 4, md: 8, lg: 8 }}
            >
              {dummyBlogData.map((blog) => (
                <BlogCard key={blog.id} {...blog} image={blog.imageUrl} />
              ))}
            </Flex>
            <Box mt={8}>
              <Button variant="primary" size="lg">
                <Text
                  color="#1A222C"
                  fontSize={{ base: "14px", md: "16px", lg: "22px" }}
                  fontWeight={700}
                  fontFamily="eudoxus"
                >
                  Read more on blog
                </Text>
              </Button>
            </Box>
          </Box>
        </VStack>

        {/* Street fuck with squad section */}
        <VStack mt={"8rem"}>
          <Box
            display="flex"
            rounded={{ base: "18px", md: "20px", lg: "25px" }}
            flexDirection={{ base: "column", lg: "column" }}
            flexWrap="wrap"
            gap={{ base: 8, lg: 12 }}
            py={{ base: 4, md: 8, lg: 8 }}
            px={{ base: 4, md: 8, lg: 8 }}
            alignItems={{ base: "center", lg: "flex-start" }}
            justifyContent="center"
            width="100%"
            minH={{ base: "864px", md: "964px", lg: "664px" }}
            bg="#171f29"
            position="relative"
            overflow="hidden"
          >
            <Flex
              w="100%"
              justifyContent="space-between"
              display={{ base: "none", md: "none", lg: "flex" }}
            >
              <Box w="100%" flex={1}>
                {/* Main Title */}
                <Box position="relative" zIndex={2}>
                  <Text
                    color="#D0F091"
                    fontFamily="gloria"
                    fontSize={{ base: "53.93px", md: "53.93px", lg: "96px" }}
                    textAlign="center"
                  >
                    The streets{" "}
                  </Text>
                  <Text
                    mt={{ base: 0, md: 0, lg: "-2rem" }}
                    color="#88C80C"
                    fontFamily="gloria"
                    textAlign="left"
                    fontSize={{ base: "53.93px", md: "53.93px", lg: "96px" }}
                  >
                    f**k with{" "}
                  </Text>
                  <Text
                    mt={{ base: 0, md: 0, lg: "-3rem" }}
                    color="#D0F091"
                    fontFamily="gloria"
                    textAlign="right"
                    fontSize={{ base: "53.93px", md: "53.93px", lg: "96px" }}
                  >
                    Squads
                  </Text>
                </Box>

                <Box display="flex" position="relative">
                  <Image
                    src="/street-9.svg"
                    alt="Street"
                    rotate="-10.87deg"
                    position="absolute"
                    top="-10"
                  />
                  <Image
                    src="/street-8.svg"
                    alt="Street"
                    rotate="10.24deg"
                    position="absolute"
                    left="20%"
                    zIndex={2}
                  />
                </Box>
              </Box>

              {/* Street Images */}

              {/* Sign Up Button */}
              <Box
                w="100%"
                flex={1}
                display="flex"
                px={{ base: 4, md: 8, lg: 16 }}
                justifyContent="flex-end"
              >
                <Flex
                  justifyContent="center"
                  w={{ base: "100%", md: "100%", lg: "50%" }}
                  alignItems="center"
                  minH={{ base: "100%", md: "100%", lg: "600px" }}
                  position="relative"
                >
                  <Image
                    src="/street-4.svg"
                    alt="Street"
                    rotate="-4.56deg"
                    position="absolute"
                    right="20%"
                    bottom="0"
                  />

                  <Image
                    src="/street-1.svg"
                    alt="Street"
                    rotate="9.32deg"
                    position="absolute"
                    right="0"
                    bottom="0"
                    zIndex={2}
                  />
                  <Box w="100%" minH="100%" />
                  <Image
                    src="/street-2.svg"
                    alt="Street"
                    rotate="18.91deg"
                    position="absolute"
                    right="-10%"
                    bottom="0"
                    zIndex={3}
                  />
                </Flex>
              </Box>
            </Flex>
            <Box
              w="100%"
              flex={1}
              display={{ base: "flex", md: "flex", lg: "none" }}
              px={{ base: 4, md: 8, lg: 16 }}
              justifyContent="flex-end"
            >
              <Flex
                justifyContent="center"
                w={{ base: "100%", md: "100%", lg: "50%" }}
                alignItems="center"
                minH={{ base: "100%", md: "100%", lg: "600px" }}
                position="relative"
              >
                <Image
                  src="/street-4.svg"
                  alt="Street"
                  rotate="-4.56deg"
                  position="absolute"
                  left={{ base: "-20", md: "20" }}
                  top="0"
                  w={{ base: "165.18px", md: "195.18px", lg: "auto" }}
                  h={{ base: "156px", md: "186px", lg: "auto" }}
                />

                <Image
                  src="/street-1.svg"
                  alt="Street"
                  rotate="9.32deg"
                  position="absolute"
                  // right="0"
                  top="0"
                  zIndex={2}
                  w={{ base: "171.06px", md: "191.06px", lg: "auto" }}
                  h={{ base: "186.92px", md: "216.92px", lg: "auto" }}
                />
                <Box w="100%" minH="100%" />
                <Image
                  w={{ base: "176.88px", md: "196.88px", lg: "auto" }}
                  h={{ base: "186.92px", md: "216.92px", lg: "auto" }}
                  src="/street-2.svg"
                  alt="Street"
                  rotate="18.91deg"
                  position="absolute"
                  right={{ base: "-20", md: "20" }}
                  top="0"
                  zIndex={3}
                />
              </Flex>
            </Box>

            <Box
              display={{ base: "flex", md: "flex", lg: "none" }}
              flexDir="column"
              gap={8}
              position="relative"
            >
              <Image
                src="/pathfinder.svg"
                position="absolute"
                bottom={{ base: "20" }}
                left={{ base: "-50%" }}
              />
              <Box position="relative" zIndex={2}>
                <Text
                  color="#D0F091"
                  fontFamily="gloria"
                  fontSize={{ base: "53.93px", md: "", lg: "96px" }}
                  textAlign="center"
                >
                  The streets{" "}
                </Text>
                <Text
                  mt={{ base: 0, md: 0, lg: "-2rem" }}
                  color="#88C80C"
                  fontFamily="gloria"
                  textAlign="left"
                  fontSize={{ base: "53.93px", md: "", lg: "96px" }}
                >
                  f**k with{" "}
                </Text>
                <Text
                  mt={{ base: 0, md: 0, lg: "-3rem" }}
                  color="#D0F091"
                  fontFamily="gloria"
                  textAlign="right"
                  fontSize={{ base: "53.93px", md: "", lg: "96px" }}
                >
                  Squads
                </Text>
              </Box>
              <Flex
                justifyContent="center"
                alignItems="center"
                w="100%"
                display={{ base: "flex", md: "flex", lg: "none" }}
              >
                <Button variant="primary" size="lg">
                  Sign Up on Squads
                </Button>
              </Flex>
            </Box>

            <Flex
              justifyContent="center"
              alignItems="center"
              w="100%"
              display={{ base: "none", md: "none", lg: "flex" }}
            >
              <Button variant="primary" size="lg">
                Sign Up on Squads
              </Button>
            </Flex>

            <Box
              w="100%"
              flex={1}
              display={{ base: "flex", md: "flex", lg: "none" }}
              px={{ base: 4, md: 8, lg: 16 }}
              justifyContent="flex-end"
            >
              <Flex
                justifyContent="center"
                w={{ base: "100%", md: "100%", lg: "50%" }}
                alignItems="center"
                minH={{ base: "100%", md: "100%", lg: "600px" }}
                position="relative"
              >
                <Image
                  src="/street-4.svg"
                  alt="Street"
                  rotate="-4.56deg"
                  position="absolute"
                  left={{ base: "-20", md: "20" }}
                  bottom="0"
                  w={{ base: "165.18px", md: "185.18px", lg: "auto" }}
                  h={{ base: "156px", md: "176px", lg: "auto" }}
                />

                <Image
                  src="/street-1.svg"
                  alt="Street"
                  rotate="9.32deg"
                  position="absolute"
                  // right="0"
                  bottom="0"
                  zIndex={2}
                  w={{ base: "171.06px", md: "191.06px", lg: "auto" }}
                  h={{ base: "186.92px", md: "216.92px", lg: "auto" }}
                />
                <Box w="100%" minH="100%" />
                <Image
                  w={{ base: "176.88px", md: "191.06px", lg: "auto" }}
                  h={{ base: "186.92px", md: "216.92px", lg: "auto" }}
                  src="/street-2.svg"
                  alt="Street"
                  rotate="18.91deg"
                  position="absolute"
                  right={{ base: "-20", md: "20" }}
                  bottom="0"
                  zIndex={3}
                />
              </Flex>
            </Box>
          </Box>
        </VStack>

        <Footer />
      </Container>
    </Box>
  );
};
