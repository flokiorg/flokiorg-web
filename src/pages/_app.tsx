import "@styles/scss/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
import Header from "@components/layouts/Header";
import Footer from "@components/layouts/Footer";
import i18n from "@utils/i18n";
import { throwErrorIfEnvVarsNotFound } from "@utils/ConfigUtils";

const App = (props: AppProps) => {
  throwErrorIfEnvVarsNotFound();
  const { Component, pageProps } = props;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-N4PQZR5N";

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Flokicoin" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
