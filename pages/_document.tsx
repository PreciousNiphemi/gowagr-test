import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Fonts imports */}
        <link
          href="https://fonts.googleapis.com/css2?family=Eudoxus+Sans:wght@400;500;600;700&family=Anek+Gurmukhi:wght@400;500;600;700&family=Gloria+Hallelujah&family=Onest:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Gimbal Extended font */}
        <link
          href="https://db.onlinewebfonts.com/c/3c8aa4c86ef6f6a13f17f5b6ef750ac8?family=Gimbal+Extended+Regular"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
