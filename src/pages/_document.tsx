import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* eslint-disable react/no-danger, @typescript-eslint/no-non-null-assertion */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env
              .NEXT_PUBLIC_GOOGLE_ANALYTICS!}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* eslint-enable */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
