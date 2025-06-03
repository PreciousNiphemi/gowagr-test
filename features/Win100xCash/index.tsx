import {
  Box,
  Container,
  VStack,
  Text,
  HStack,
  Image,
  Flex,
} from "@chakra-ui/react";

export const Win100xCash = () => {
  const rowImages = ["/football.svg", "/glove.svg", "/boot.svg", "/target.svg"];
  return (
    <Box
      // position="absolute"
      top="0"
      height="100%"
      minHeight={{ base: "100vh", lg: "100vh", xl: "100vh" }}
      backgroundColor="#fcfff5"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={{ base: 12, md: 16, lg: 20 }}
      css={{
        "--mask": `
           radial-gradient(34.99px at 50% 48px,#000 99%,#0000 101%) calc(50% - 60px) 0/120px 100%,
           radial-gradient(34.99px at 50% -18px,#0000 99%,#000 101%) 50% 30px/120px 100% repeat-x;
      `,
        WebkitMask: "var(--mask)",
        mask: "var(--mask)",
      }}
    >
      <Container maxW="container.lg" px={{ base: 4, md: 8 }}>
        <Flex justifyContent="center" mb={{ base: "2rem", lg: "0" }}>
          <HStack>
            {rowImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Row ${index + 1}`}
                w={{ base: "42.87px", lg: "auto" }}
                h={{ base: "", lg: "auto" }}
              />
            ))}
          </HStack>
        </Flex>

        <VStack gap={0}>
          <Text
            fontFamily="anek"
            fontSize={{ base: "26px", lg: "80.37px" }}
            fontWeight={800}
            color="#141B23"
          >
            WIN UP TO 100X
          </Text>
          <Text
            mt={{ base: "0", lg: "-2rem" }}
            fontFamily="anek"
            fontSize={{ base: "26px", lg: "80.37px" }}
            fontWeight={800}
            color="#141B23"
          >
            YOUR CASH. JUST PICK
          </Text>

          <Text
            mt={{ base: "0", lg: "-2rem" }}
            fontFamily="anek"
            fontSize={{ base: "26px", lg: "80.37px" }}
            fontWeight={800}
            color="#141B23"
          >
            MORE OR LESS
          </Text>
        </VStack>
        <Flex
          justifyContent="center"
          mt={"6rem"}
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Image src="/100x-bg.svg" alt="Win 100x Cash" />
        </Flex>
        <Flex
          justifyContent="center"
          mt={"6rem"}
          flexDirection="column"
          display={{ base: "flex", md: "none", lg: "none" }}
          position="relative"
        >
          <Box>
            <Text
              color="#2A343F"
              fontWeight={400}
              fontSize="20.14px"
              fontFamily="gloria"
              textAlign="center"
            >
              Pick more or less on your favorite players stats
            </Text>
          </Box>
          <Image
            src="/spiral-arrow.svg"
            alt="Win 100x Cash"
            position="absolute"
            zIndex={1}
            top="10"
            right="10"
          />

          <Image src="/100x.svg" alt="Win 100x Cash" zIndex={2} />

          <Box mt={{ base: "3rem" }}>
            <Text
              color="#2A343F"
              textAlign="center"
              fontFamily="gloria"
              fontSize="20.14px"
              fontWeight={400}
            >
              8 picks =
            </Text>
            <HStack gap={2} justifyContent="center">
              <Text
                color="#FD89ED"
                textAlign="center"
                fontWeight={800}
                fontSize="47px"
              >
                100X
              </Text>
              <Box>
                <Text
                  color="#2A343F"
                  fontSize="20.14px"
                  fontFamily="gloria"
                  fontWeight={400}
                >
                  you entry
                </Text>

                <Text
                  color="#2A343F"
                  fontSize="20.14px"
                  fontFamily="gloria"
                  fontWeight={400}
                >
                  amount
                </Text>
              </Box>
            </HStack>
          </Box>

          <Box mt="2rem" display="flex" justifyContent="center">
            <Image src="/payout.svg" alt="Win 100x Cash" />
          </Box>
          <Image
            src="/withdraw-arrow.svg"
            alt="Win 100x Cash"
            position="absolute"
            zIndex={1}
            bottom="32%"
            right="25%"
          />
          <Box mt={{ base: "8rem" }}>
            <Text
              color="#2A343F"
              fontSize="29.52px"
              fontFamily="gloria"
              textAlign="center"
              fontWeight={400}
              rotate="-7.22deg"
            >
              Withdraw your winnings
            </Text>
            <Flex justifyContent="center">
              <Image src="/Jerry.svg" alt="jerry" />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
