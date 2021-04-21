import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Welcome to athena!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <h1>Welcome to athena!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
