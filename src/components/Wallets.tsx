import React from "react";
import styles from "@styles/scss/Wallets.module.scss";
import { useTranslation } from "react-i18next";

const Wallets = () => {
  const { t } = useTranslation();
  const cards: any = t("wallets.cards", { returnObjects: true });

  return (
    <section className={styles.walletsSection} id="wallets">
      <div className={styles.container}>
        <div className={styles.cardGrid}>
          {cards.map((card: any, index: number) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={`${styles.card} ${styles.cardContent}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>{card.title}</div>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardButton}
                  >
                    {card.button}
                  </a>
                </div>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wallets;
