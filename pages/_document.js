import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* boxicons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />

        {/* title icon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-152x152-precomposed.png"
          sizes="152x152"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
