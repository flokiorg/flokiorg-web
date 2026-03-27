import React from "react";
import { ROUTE_SEO } from "@constants/seo";
import SeoHead from "@components/common/SeoHead";
import Donation from "@components/Donation";
import styles from "@styles/scss/DonationPage.module.scss";

const DonationPage = () => {
  return (
    <>
      <SeoHead {...ROUTE_SEO["/donate"]} />
      <main className={styles.main}>
        <div className={styles.containerBoxed}>
          <Donation />
          <div className={styles.sectionDivider} aria-hidden="true" />
          <Donation variant="ecosystem" />
        </div>
      </main>
    </>
  );
};

export default DonationPage;
