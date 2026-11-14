import React from "react";
import { ROUTE_SEO } from "@constants/seo";
import About from "@components/About";
import SeoHead from "@components/common/SeoHead";
import Contact from "@components/Contact";
import Donation from "@components/Donation";
import Faq from "@components/Faq";
import Lokihub from "@components/Lokihub";
import Roadmap from "@components/Roadmap";
import Slider from "@components/Slider";
import Topics from "@components/Topics";
import Wallets from "@components/Wallets";
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
          <Lokihub />
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
