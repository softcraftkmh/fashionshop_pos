import App from "next/app";
import Head from "next/head";
import React from "react";

import "purecss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/index.scss";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
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
        <Head>Fashion Shop App</Head>
        <Component {...pageProps} />
      </>
    );
  }
}
