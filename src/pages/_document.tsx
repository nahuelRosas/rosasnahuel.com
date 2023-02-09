import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="#FEB48C" name="theme-color" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {["PolySans-Regular", "PolySans-Medium"].map((font) => (
          <link
            key={font}
            rel="preload"
            href={`/fonts/${font}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        ))}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
