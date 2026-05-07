import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div
          dangerouslySetInnerHTML={{
            __html: `
      <script
        type="module"
        src="https://pages-github.b-cdn.net/webcomponents/modules/cs-input.js"
      ></script>          
          `,
          }}
        ></div>
        <div>AAAQQ</div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
