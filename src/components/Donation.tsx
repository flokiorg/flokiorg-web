import React from "react";
import styles from "@styles/scss/Donations.module.scss";
import { useTranslation } from "react-i18next";
import { DONATION_APIKEY } from "@constants/config";

const Donation = () => {
  const { t } = useTranslation();
  const widgetUrl = `https://nowpayments.io/embeds/donation-widget?api_key=${DONATION_APIKEY}`;

  // Style objet, typé correctement
  const iframeStyle: React.CSSProperties = {
    overflowY: "hidden",
    borderRadius: 11,
    border: "2px solid #d0970f", // gold
    boxShadow: "0 10px 30px rgba(0,0,0,.45)",
  };

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
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.widgetWrapper}>
            <iframe
              title="Crypto Donation Widget"
              src={widgetUrl}
              width={346}
              height={570}
              frameBorder={0}
              scrolling="no"
              style={iframeStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
