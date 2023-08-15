import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3HLQCMV"
height="0" width="0" style="display:none;visibility:hidden" />`,
          }}
        />
      </body>
    </Html>
  );
};

export default Document;
