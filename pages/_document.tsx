import React from 'react';

import {
  default as NextDocument,
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const props = await super.getInitialProps(context);

    return {
      ...props,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />

          <meta name="application-name" content="UpCloud" />

          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-128x128.png?v3"
            sizes="128x128"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-64x64.png?v3"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-32x32.png?v3"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-16x16.png?v3"
            sizes="16x16"
          />

          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-touch-icon-120x120.png?v3"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
