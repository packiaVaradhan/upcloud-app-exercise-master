import React from 'react';
import { default as NextApp, AppContext } from 'next/app';
import Layout from 'components/Layout';
import ClientOnly from 'components/ClientOnly';

class App extends NextApp {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ClientOnly>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ClientOnly>
      </>
    );
  }
}

export default App;
