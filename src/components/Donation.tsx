import React from "react";
import styles from "@styles/scss/Donations.module.scss";
import { useTranslation } from "react-i18next";
import { DONATION_URL } from "@constants/config";

const Donation = () => {
  const { t } = useTranslation();

  const descriptions: string[] =
    (t("donation.descriptions", { returnObjects: true }) as any) || [];
  const descriptionList: string[] =
    (t("donation.descriptionList", { returnObjects: true }) as any) || [];

  return (
    <section className={styles.donationSection} id="donation">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.headerBox}>
            <div id="donationLabel" className={styles.label}>
              {t("donation.sectionLabel")}
            </div>
            <div className={styles.title}>
              {t("donation.title")} <span>{t("donation.titleHighlight")}</span>
            </div>
            <div className={styles.subtitle}>{t("donation.subtitle")}</div>
          </div>

          <div className={styles.descriptions}>
            {descriptions.map((html, idx) => (
              <p
                key={idx}
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>

          {descriptionList.length > 0 && (
            <ul className={styles.descriptionList}>
              {descriptionList.map((item, idx) => (
                <li key={idx}>
                  <strong className={styles.bulletPoint}>{"> "}</strong> {item}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.buttonWrapper}>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sectionButton}
            >
              <span className={styles.icon}>💜</span>
              {t("donation.buttonLabel")}
            </a>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper}>
            <img src="/img/wof.png" className={styles.image} alt="Web of Fun" />
            <div className={styles.imageTitle}>{t("donation.imageTitle")}</div>
            <div className={styles.imageSubtitle}>
              {t("donation.imageSubtitle")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
