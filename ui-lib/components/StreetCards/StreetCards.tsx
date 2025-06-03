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
            bgGradient="to-r"
            gradientFrom="#232D39"
            gradientTo="#000000"
            flexDirection="column"
            // justifyContent="end"
            borderRadius="18.42px"
            position="relative"
            overflow="hidden"
          >
            <Image src="/numerous-options.svg" alt="Numerous Options" />
            <Text
              color="#D0F091"
              fontSize="10.32px"
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
            borderRadius="18.42px"
            position="relative"
            overflow="hidden"
          ></Box>
        );

      case "fast-deposits":
        return (
          <Box
            width={{ base: "251.12px", lg: "251.12px" }}
            height={{ base: "289.74px", lg: "289.74px" }}
            display="flex"
            gap={"13.26px"}
            bgGradient="to-b"
            gradientFrom="#FFC2F7"
            gradientTo="#FFFBFD"
            flexDirection="column"
            // justifyContent="end"
            borderRadius="18.42px"
            position="relative"
            overflow="hidden"
          ></Box>
        );

      case "bonus-rewards":
        return (
          <Box
            width={{ base: "251.12px", lg: "251.12px" }}
            height={{ base: "289.74px", lg: "289.74px" }}
            bg="#FFFFFF"
            display="flex"
            gap={"13.26px"}
            flexDirection="column"
            // justifyContent="end"
            borderRadius="18.42px"
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
