import { assertNever } from "@/utils/assertNever";
import { Button as ChakraButton } from "@chakra-ui/react";
type ButtonProps = {
  variant: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({
  variant,
  size = "md",
  children,
  onClick,
}: ButtonProps) => {
  switch (variant) {
    case "primary":
      return (
        <ChakraButton
          size={size}
          color="#000000"
          fontWeight={700}
          bgColor="#D0F091"
          borderRadius="6px"
          onClick={onClick}
          fontFamily="eudoxus"
          py={{ base: "16px", md: "12px" }}
          px={{ base: "24px", md: "24px" }}
          fontSize={{ base: "16px", md: "14px" }}
        >
          {children}
        </ChakraButton>
      );
    case "secondary":
      return (
        <ChakraButton size={size} onClick={onClick}>
          {children}
        </ChakraButton>
      );
    case "dark":
      return (
        <ChakraButton
          bg="#2F3843"
          color="#D2D4D7"
          p="12px 16px"
          fontSize="12px"
          fontWeight={800}
          fontFamily="eudoxus"
          size={size}
          onClick={onClick}
        >
          {children}
        </ChakraButton>
      );

    default:
      return assertNever(variant);
  }
};
