import React from "react";
import { useTranslation } from "react-i18next";
import styles from "@styles/scss/Lokihub.module.scss";

const Lokihub = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.lokihubSection} id="lokihub">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.tagline}>{t("lokihub.tagline")}</div>
            <h2 className={styles.title}>
              {t("lokihub.title1")}{" "}
              <span className={styles.highlight}>{t("lokihub.title2")}</span>
            </h2>
            <p className={styles.description}>{t("lokihub.description")}</p>
            <ul className={styles.featureList}>
              {(t("lokihub.features", { returnObjects: true }) as string[]).map(
                (feature: string, i: number) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✓</span>
                    {feature}
                  </li>
                ),
              )}
            </ul>
            <a
              href={t("lokihub.link")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              {t("lokihub.button")}
            </a>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/img/loki-light-head.svg"
              alt="Lokihub Asset"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lokihub;
