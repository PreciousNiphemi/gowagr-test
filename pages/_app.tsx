import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
