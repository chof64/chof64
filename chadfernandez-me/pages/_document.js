import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Heebo&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Cloudflare Web Analytics */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "48a5adb3c6d24c20a06e99d74e1c6761"}'></script>
        {/* End Cloudflare Web Analytics */}
      </body>
    </Html>
  );
}

export default Document;