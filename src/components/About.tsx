import React from "react";
import styles from "@styles/scss/About.module.scss";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const About = () => {
  const { t } = useTranslation();
  const cards: any = t("about.cards", { returnObjects: true });

  return (
    <section className={styles.about} id="about">
      <div style={{ textAlign: "center" }}>
        <div className={styles.subtitle}>{t("about.subtitle")}</div>
      </div>
      <div className={styles.contentWrapper}>
        {cards.map((card: any, index: number) => (
          <div key={index} className={styles.box}>
            <div className={styles.item}>
              <div className={styles.cont}>
                <div className={styles.boxhead}>
                  <div>
                    <img
                      src={card.image}
                      alt={`Icon ${index + 1}`}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <span className={styles.boxsub}>{card.subtitle}</span>
                    <h5 className={styles.boxtitle}>{card.title}</h5>
                  </div>
                </div>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
