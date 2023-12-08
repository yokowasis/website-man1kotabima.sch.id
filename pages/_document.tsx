import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/index.css" type="text/css" media="all" />
        <link
          rel="stylesheet"
          id="et-divi-open-sans-css"
          href="/assets-template/css.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="divi-dynamic-css"
          href="/assets-template/et-divi-dynamic-9.css"
          as="style"
          media="all"
        />
        <link
          rel="stylesheet"
          id="et-builder-google fonts-cached-css"
          href="/assets-template/css-1.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          as="style"
          id="et-core-unified-deferred-9-cached-inline-styles"
          href="/assets-template/et-core-unified-deferred-9.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
