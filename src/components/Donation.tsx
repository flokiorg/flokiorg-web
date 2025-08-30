import React from "react";
import styles from "@styles/scss/Donations.module.scss";
import { useTranslation } from "react-i18next";
import { DONATION_URL } from "@constants/config";

const Donation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.donationSection} id="donation">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.headerBox}>
            <div className={styles.label}>{t("donation.sectionLabel")}</div>
            <div className={styles.title}>
              {t("donation.title")} <span>{t("donation.titleHighlight")}</span>{" "}
              {t("donation.remainingTitle")}
            </div>
          </div>
          <p className={styles.description}>{t("donation.description")}</p>
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sectionButton}
          >
            <img
              src="/assets/heart.png"
              alt="Heart Icon"
              className={styles.icon}
            />
            {t("donation.buttonLabel")}
          </a>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper}>
            <img src="/img/wof.png" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
