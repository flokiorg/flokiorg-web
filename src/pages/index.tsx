import React from "react";
import SeoHead from "@components/common/SeoHead";
import About from "@components/About";
import Contact from "@components/Contact";
import Donation from "@components/Donation";
import Faq from "@components/Faq";
import Roadmap from "@components/Roadmap";
import Slider from "@components/Slider";
import Topics from "@components/Topics";
import Wallets from "@components/Wallets";
import { ROUTE_SEO } from "@constants/seo";
import styles from "@styles/scss/HomePage.module.scss";

const Home = () => {
  return (
    <>
      <SeoHead {...ROUTE_SEO["/"]} />
      <main className={styles.main}>
        <div className={styles.containerBoxed}>
          <Slider />
          <About />
          <Donation />
          <Roadmap />
          <Wallets />
          <Faq />
          <Topics />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
