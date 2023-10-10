import type { AppProps } from "next/app";
import { Provider } from "@robust-ui/nextjs-components";
import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "../components/footer";
// import { Background } from "@/components/background";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Background /> */}
      <Provider bg="black" overflowY="auto">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
