import { assertNever } from "@/utils/assertNever";
import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react";

type StreetCardsProps = {
  variant:
    | "numerous-options"
    | "instant-cashouts"
    | "fast-deposits"
    | "bonus-rewards";
  transform?: string;
  zIndex?: number;
  _hover?: object;
  transition?: string;
};

export const StreetCards = ({
  variant,
  transform,
  zIndex,
  _hover,
  transition,
}: StreetCardsProps) => {
  const getCardContent = () => {
    switch (variant) {
      case "numerous-options":
        return (
          <Box
            width={{ base: "251.12px", lg: "251.12px" }}
            height={{ base: "289.74px", lg: "289.74px" }}
            bg="#FFFFFF"
            display="flex"
            gap={"13.26px"}
            p={{ base: "10px", lg: "18px" }}
            bgGradient="to-r"
            gradientFrom="#232D39"
            gradientTo="#000000"
            flexDirection="column"
            // justifyContent="end"
            borderRadius="18.42px"
            position="relative"
            overflow="hidden"
          >
            <Flex justifyContent="center" alignItems="center" w="100%">
              <Image
                src="/numerous-options.svg"
                alt="Numerous Options"
                w="105.5px"
                h="132.74px"
              />
            </Flex>

            <Text
              color="#D0F091"
              fontSize="17.69px"
              fontWeight={800}
              fontFamily="eudoxus"
            >
              Numerous Options
            </Text>
            <Text
              color="#FAFEF4"
              fontSize="10.32px"
              fontWeight={400}
              fontFamily="eudoxus"
            >
              Bet Your Way with Endless Options! No matter your game, we’ve got
              the odds, the excitement, and the options just for you!{" "}
            </Text>
          </Box>
        );

      case "instant-cashouts":
        return (
          <Box
            width={{ base: "251.12px", lg: "251.12px" }}
            height={{ base: "289.74px", lg: "289.74px" }}
            bg="#FFFFFF"
            display="flex"
            gap={"13.26px"}
            bgGradient="to-r"
            gradientFrom="#104333"
            gradientTo="#28A981"
            flexDirection="column"
            // justifyContent="end"
            p={{ base: "10px", lg: "18px" }}
            borderRadius="18.42px"
            position="relative"
            overflow="hidden"
          >
            <Flex justifyContent="center" alignItems="center" w="100%">
              <Image
                src="/instant-cashout.svg"
                alt="Instant Cashout"
                w="105.5px"
                h="105.5px"
              />
            </Flex>

            <Text
              color="#D0F091"
              fontSize="17.69px"
              fontWeight={800}
              fontFamily="eudoxus"
            >
              Instant Cashout
            </Text>
            <Text
              color="#D2D4D7"
              fontSize="10.32px"
              fontWeight={400}
              fontFamily="eudoxus"
            >
              Say goodbye to waiting! With Squads, you can cash out your funds
              instantly—any time, any day. Whether it's a weekend or midnight,
              your money is just a tap away. 🚀
            </Text>
          </Box>
        );

      case "fast-deposits":
        return (
          <Box
            width={{ base: "251.12px", lg: "251.12px" }}
            height={{ base: "289.74px", lg: "289.74px" }}
            bg="#FFFFFF"
            display="flex"
            gap={"13.26px"}
            flexDirection="column"
            // justifyContent="end"
            p={{ base: "10px", lg: "18px" }}
            borderRadius="18.42px"
            position="relative"
            overflow="hidden"
          >
            <Flex justifyContent="center" alignItems="center" w="100%">
              <Image
                src="/fast-deposits.svg"
                alt="Fast deposits"
                w="105.5px"
                h="105.5px"
              />
            </Flex>

            <Text
              color="#20262E"
              fontSize="17.69px"
              fontWeight={800}
              fontFamily="eudoxus"
            >
              Fast Deposit
            </Text>
            <Text
              color="#353E49"
              fontSize="10.32px"
              fontWeight={400}
              fontFamily="eudoxus"
            >
              Don’t let slow transactions hold you back. With Squads, you can
              deposit funds instantly and stay in the game. Your winning streak
              starts here!"🚀
            </Text>
          </Box>
        );

      case "bonus-rewards":
        return (
          <Box
            width={{ base: "251.12px", lg: "251.12px" }}
            height={{ base: "289.74px", lg: "289.74px" }}
            bg="#FFFFFF"
            display="flex"
            gap={"13.26px"}
            bgGradient="to-b"
            gradientFrom="#FFC2F7"
            gradientTo="#FFFBFD"
            flexDirection="column"
            // justifyContent="end"
            p={{ base: "10px", lg: "18px" }}
            borderRadius="18.42px"
            position="relative"
            overflow="hidden"
          >
            <Flex justifyContent="center" alignItems="center" w="100%">
              <Image
                src="/bonuses.svg"
                alt="Bonus Rewards"
                w="105.5px"
                h="105.5px"
              />
            </Flex>

            <Text
              color="#1A222C"
              fontSize="17.69px"
              fontWeight={800}
              fontFamily="eudoxus"
            >
              Bonuses & Rewards
            </Text>
            <Text
              color="#353E49"
              fontSize="10.32px"
              fontWeight={400}
              fontFamily="eudoxus"
            >
              Don’t let slow transactions hold you back. With Squads, you can
              deposit funds instantly and stay in the game. Your winning streak
              starts here!"🚀
            </Text>
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
