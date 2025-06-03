import { assertNever } from "@/utils/assertNever";
import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";

type EcosystemCardProps = {
  variant: "promo-cash" | "deposit-boost" | "share-code";
  transform?: string;
  zIndex?: number;
  _hover?: object;
  transition?: string;
};

export const EcosystemCard = ({
  variant,
  transform,
  zIndex,
  _hover,
  transition,
}: EcosystemCardProps) => {
  const getCardContent = () => {
    switch (variant) {
      case "promo-cash":
        return (
          <Box
            width={{ base: "292.20px", lg: "379.63px" }}
            height={{ base: "365.25px", lg: "474.54px" }}
            bg="#FFFFFF"
            display="flex"
            flexDirection="column"
            justifyContent="end"
            borderRadius="xl"
            position="relative"
            overflow="hidden"
          >
            {/* Confetti decoration */}
            <Image
              src="/confetti.svg"
              alt="Confetti decoration"
              position="absolute"
              top="-5px"
              right="0"
              width="100%"
              height="auto"
              opacity={0.8}
              zIndex={1}
            />

            {/* Main content */}
            <VStack
              justify="center"
              align="center"
              height="70%"
              gap={2}
              px={4}
              //   borderRadius="17.58px"
              borderRadius="xl"
              background={`linear-gradient(to right, rgba(31, 41, 53, 1) 0%, rgba(0, 0, 0, 1) 100%), url('/pattern-background-image.svg')`}
              backgroundSize="cover, contain"
              backgroundPosition="center, center"
              backgroundRepeat="no-repeat, repeat"
              backgroundBlendMode="screen"
              position="relative"
            >
              {/* ₦500 Hand Image - Direct positioning on Image */}
              <Image
                src="/promo-cash-header-image.svg"
                alt="₦500 Promo Cash Header"
                width="auto"
                height="auto"
                position="absolute"
                top="-80px"
                left="50%"
                transform="translateX(-50%)"
                rotate="15deg"
                zIndex={10}
              />

              {/* Emoji Dollar Sign - positioned on the right */}

              <Text
                fontSize="95.56px"
                fontWeight={800}
                lineHeight="94.99px"
                position="absolute"
                top="20%"
                right="-45px"
                rotate="15deg"
                zIndex={10}
              >
                🤑
              </Text>

              <Text
                fontSize={{ base: "33.48px", md: "43.5px" }}
                fontWeight="semibold"
                color="#12DD27"
                fontFamily="gloria"
                rotate="-10deg"
                textAlign="center"
              >
                Promo Cash
              </Text>
              <Box w={{ base: "172.16px", md: "223.68px" }}>
                <Text
                  fontSize={{ base: "21.2px", md: "27.55px" }}
                  color="#FFFFFF"
                  fontFamily="gloria"
                  rotate="5deg"
                  fontWeight="bold"
                  textAlign="center"
                >
                  to create your first entry
                </Text>
              </Box>
            </VStack>
          </Box>
        );

      case "deposit-boost":
        return (
          <Box
            width={{ base: "292.03px", lg: "379.40px" }}
            height={{ base: "365.03px", lg: "474.25px" }}
            py={6}
            borderRadius="xl"
            position="relative"
            overflow="hidden"
            boxShadow="2xl"
            // background={`linear-gradient(to bottom, #271437, #271437), url('/pattern-background-image.svg')`}
            background={`linear-gradient(to right, rgba(39, 20, 55, 1) 0%, rgba(0, 0, 0, 1) 150%), url('/pattern-background-image.svg')`}
            backgroundSize="cover, contain"
            backgroundPosition="center, center"
            backgroundRepeat="no-repeat, repeat"
            backgroundBlendMode="screen"
          >
            {/* Main content */}
            <VStack
              justify="center"
              align="center"
              height="100%"
              gap={3}
              position="relative"
              zIndex={2}
            >
              <Image
                src="/squad-beta.svg"
                alt="Squad Beta Logo"
                position="absolute"
                rotate="-5deg"
                top="20px"
                left="40px"
                width="auto"
                height="30px"
                zIndex={10}
              />

              <Box rotate="-4deg" mt={{ base: "3rem", md: "0rem" }}>
                <Text
                  fontSize={{ base: "46.73px", md: "60.71px" }}
                  fontWeight={400}
                  color="#FD89ED"
                  fontFamily="gimbal"
                  textAlign="center"
                >
                  deposit
                </Text>
                <Text
                  mt={-8}
                  fontSize={{ base: "50.02px", md: "64.99px" }}
                  fontWeight="bold"
                  color="#FD89ED"
                  fontFamily="gimbal"
                  textAlign="center"
                >
                  boOst
                </Text>
              </Box>
              <HStack spaceX={-1}>
                <Image src="/plus-icon.svg" alt="Deposit Boost 1" />
                <Text
                  fontFamily="eudoxus"
                  fontSize={{ base: "7.32px", md: "9.5px" }}
                  fontWeight={500}
                >
                  Get up to{" "}
                  <Text as="span" color="#D0F091">
                    2,000,000
                  </Text>{" "}
                  in Promo Cash
                </Text>
              </HStack>

              <Box>
                <Text
                  fontSize={{ base: "17.39px", md: "22.59px" }}
                  color="#FFFFFF"
                  fontWeight={400}
                  fontFamily="eudoxus"
                  textAlign="center"
                >
                  Enjoy{" "}
                  <Text as="span" color="#D0F091">
                    30% Bonus
                  </Text>{" "}
                  on all your
                </Text>

                <HStack spaceX={-1} mt={-1}>
                  <Image src="/green-heart.svg" alt="Deposit Boost 1" />
                  <Text
                    fontSize={{ base: "17.39px", md: "22.59px" }}
                    color="#FFFFFF"
                    fontWeight={400}
                    fontFamily="eudoxus"
                    textAlign="center"
                  >
                    deposits this Friday
                  </Text>
                </HStack>
              </Box>
              <Box
                mt="2rem"
                py="6.92px"
                px="13.84px"
                bg="#2F384333"
                rotate="-10deg"
                borderRadius="13.84px"
              >
                <Text
                  color="#FD89ED"
                  fontSize="13.84px"
                  fontWeight={700}
                  fontFamily="eudoxus"
                >
                  www.squads.game
                </Text>
              </Box>

              {/* Arrow pointing to www.squads.game */}
              <Image
                src="/deposit-boost-pointer-arrow.svg"
                alt="Pointer arrow"
                position="absolute"
                bottom={{ base: "10px", md: "50px" }}
                left={{ base: "0px", md: "30px" }}
                width="auto"
                height="auto"
                zIndex={15}
                rotate="-20deg"
              />
            </VStack>
          </Box>
        );

      case "share-code":
        return (
          <Box
            width={{ base: "292.20px", lg: "379.63px" }}
            height={{ base: "365.25px", lg: "474.54px" }}
            bg="#FFFFFF"
            display="flex"
            flexDirection="column"
            justifyContent="end"
            borderRadius="xl"
            position="relative"
            overflow="hidden"
          >
            {/* Confetti decoration */}
            <Image
              src="/confetti.svg"
              alt="Confetti decoration"
              position="absolute"
              top="-5px"
              right="0"
              width="100%"
              height="auto"
              opacity={0.8}
              zIndex={1}
            />

            {/* Main content */}
            <VStack
              justify="center"
              align="center"
              height="70%"
              gap={2}
              px={4}
              //   borderRadius="17.58px"
              borderRadius="xl"
              background={`linear-gradient(to right, rgba(84, 8, 53, 1) 0%, rgba(0, 0, 0, 1) 100%), url('/pattern-background-image.svg')`}
              backgroundSize="cover, contain"
              backgroundPosition="center, center"
              backgroundRepeat="no-repeat, repeat"
              backgroundBlendMode="screen"
              position="relative"
            >
              {/* ₦500 Hand Image - Direct positioning on Image */}
              <Image
                src="/share-code-header-image.svg"
                alt="₦500 Promo Cash Header"
                position="absolute"
                top={{ base: "-50px", md: "-80px" }}
                left={{ base: "50%", md: "50%" }}
                width={{ base: "185.92px", md: "auto" }}
                height={{ base: "175.67px", md: "auto" }}
                transform="translateX(-50%)"
                rotate="15deg"
                zIndex={10}
              />

              <Box w={{ base: "195.12px", md: "253.50px" }}>
                <Text
                  fontSize={{ base: "15.12px", md: "20.16px" }}
                  fontWeight={800}
                  color="#BCBFC2"
                  fontFamily="eudoxus"
                  rotate="0deg"
                  textAlign="center"
                >
                  Share your code with friends &{" "}
                  <Text as="span" color="#16DD12">
                    earn cash
                  </Text>
                  !
                </Text>
              </Box>

              <Box w={{ base: "220.48px", md: "286.45px" }}>
                <Text
                  fontSize={{ base: "7.16px", md: "9.3px" }}
                  fontWeight={500}
                  fontFamily="eudoxus"
                  textAlign="center"
                >
                  <Text as="span" color="#E4FFAD">
                    You get 5%
                  </Text>
                  in cash rewards when your friends or anyone use your entry
                  code to make their own entry 😏
                </Text>
              </Box>
            </VStack>
          </Box>
        );

      default:
        return assertNever(variant);
    }
  };

  return (
    <Box
      transform={transform}
      zIndex={zIndex}
      _hover={_hover}
      transition={transition}
      cursor="pointer"
    >
      {getCardContent()}
    </Box>
  );
};
