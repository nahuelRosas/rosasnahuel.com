import "../styles/prism.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import fontFace from "lib/fontface";
import theme from "lib/theme";
import { DefaultSeo } from "next-seo";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <ChakraProvider theme={theme}>
        <Global styles={fontFace} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
