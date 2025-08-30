import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="title" content="Flokicoin - A Layer-1 chain powered by Scrypt Family." />
          <meta name="description" content="Flokicoin is a fast and secure cryptocurrency that combines fun and community-driven decentralization for the next generation of digital assets." />
          <meta name="keywords" content="Flokicoin, blockchain, cryptocurrency, digital currency, decentralized finance, secure transactions, blockchain technology, crypto, financial freedom" />
          <meta name="author" content="Flokicoin Community" />
          <meta property="og:title" content="Flokicoin - A Layer-1 chain powered by Scrypt Family." />
          <meta property="og:description" content="Flokicoin brings fast, secure, and scalable transactions to the world of cryptocurrency." />
          <meta property="og:image" content="https://flokicoin.org/assets/thumbnail.jpg" />
          <meta property="og:url" content="https://flokicoin.org" />
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
          <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N4PQZR5N');<
            `,
          }}
        />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N4PQZR5N"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
