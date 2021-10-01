import React from "react";
import { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Head from "next/head";

import "../styles/index.css";

function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Head>
        <title>Fantom Gallery</title>
      </Head>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
