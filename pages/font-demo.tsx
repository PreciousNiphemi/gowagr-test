import { Box, Text, Heading, VStack, Container } from "@chakra-ui/react";
import Head from "next/head";

const FontDemo = () => {
  return (
    <>
      <Head>
        <title>Font Theme Demo</title>
        <meta
          name="description"
          content="Demonstration of custom fonts in Chakra UI"
        />
      </Head>

      <Container maxW="container.lg" py={10}>
        <VStack gap={8} align="stretch">
          {/* Default fonts (Eudoxus Sans) */}
          <Box>
            <Heading as="h1" size="2xl" mb={4}>
              Default Theme Fonts (Eudoxus Sans)
            </Heading>
            <Text fontSize="lg">
              This text uses the default body font family, which is set to
              Eudoxus Sans. It should display clean, modern, and highly readable
              typography.
            </Text>
          </Box>

          {/* Eudoxus Sans explicitly */}
          <Box>
            <Heading as="h2" size="xl" mb={4} fontFamily="eudoxus">
              Eudoxus Sans Font Family
            </Heading>
            <Text fontSize="lg" fontFamily="eudoxus">
              This text explicitly uses the Eudoxus Sans font family token.
              Eudoxus Sans is a clean, geometric sans-serif typeface perfect for
              modern UI design.
            </Text>
          </Box>

          {/* Anek Gurmukhi */}
          <Box>
            <Heading as="h2" size="xl" mb={4} fontFamily="anek">
              Anek Gurmukhi Font Family
            </Heading>
            <Text fontSize="lg" fontFamily="anek">
              This text uses the Anek Gurmukhi font family token. Anek Gurmukhi
              is a versatile font that supports both Latin and Gurmukhi scripts,
              making it perfect for multilingual applications.
            </Text>
          </Box>

          {/* Gloria Hallelujah */}
          <Box>
            <Heading as="h2" size="xl" mb={4} fontFamily="gloria">
              Gloria Hallelujah Font Family
            </Heading>
            <Text fontSize="lg" fontFamily="gloria">
              This text uses the Gloria Hallelujah font family token. Gloria
              Hallelujah is a fun, handwritten-style font that adds personality
              and warmth to your design. Perfect for creative or playful
              content!
            </Text>
          </Box>

          {/* Font weights demonstration */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Font Weight Examples
            </Heading>
            <VStack align="start" gap={2}>
              <Text fontWeight="normal">Normal weight text (400)</Text>
              <Text fontWeight="medium">Medium weight text (500)</Text>
              <Text fontWeight="semibold">Semibold weight text (600)</Text>
              <Text fontWeight="bold">Bold weight text (700)</Text>
            </VStack>
          </Box>

          {/* Font sizes demonstration */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Font Size Examples
            </Heading>
            <VStack align="start" gap={2}>
              <Text fontSize="xs">Extra small text (xs)</Text>
              <Text fontSize="sm">Small text (sm)</Text>
              <Text fontSize="md">Medium text (md)</Text>
              <Text fontSize="lg">Large text (lg)</Text>
              <Text fontSize="xl">Extra large text (xl)</Text>
              <Text fontSize="2xl">2X large text (2xl)</Text>
              <Text fontSize="3xl">3X large text (3xl)</Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default FontDemo;
