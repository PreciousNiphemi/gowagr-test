import { Box, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type BlogCardProps = {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
};
export const BlogCard = ({
  tag,
  tagColor,
  title,
  image,
  description,
}: BlogCardProps) => {
  return (
    <Box
      h={{ base: "100%", md: "100%", lg: "424px" }}
      w={{ base: "100%", md: "100%", lg: "378.33px" }}
    >
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        h={{ base: "100%", md: "100%", lg: "240px" }}
      >
        <Image
          src={image}
          alt={title}
          h={{ base: "100%", md: "100%", lg: "212.5px" }}
        />
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        gap={2}
        w={{ base: "100%", md: "100%", lg: "350px" }}
      >
        <Text
          color={tagColor}
          fontSize={{ base: "14px", md: "14px", lg: "18px" }}
          fontWeight={700}
          fontFamily="eudoxus"
        >
          {tag}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "14px", lg: "20px" }}
          fontWeight={700}
          textAlign="left"
          fontFamily="eudoxus"
          color="#D2D4D7"
        >
          {title}
        </Text>
        <Text
          color="#797F86"
          textAlign="left"
          fontSize={{ base: "14px", md: "14px", lg: "14px" }}
          fontWeight={400}
          fontFamily="eudoxus"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
