import React from "react";
import styles from "@styles/scss/Topics.module.scss";
import { useTranslation } from "react-i18next";

const Topics = () => {
  const { t } = useTranslation();
  const topics: any = t("topics.cards", { returnObjects: true });

  return (
    <section className={styles.topicsSection} id="topics">
      <div className={styles.container}>
        <span className={styles.sectionTag}>{t("topics.sectionTag")}</span>
        <h2 className={styles.sectionTitle}>{t("topics.title")}</h2>

        <div className={styles.cardGrid}>
          {topics.map((topic: any, index: number) => (
            <div key={index} className={styles.topicCard}>
              <a href={topic.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={topic.image}
                  alt={topic.title}
                  width={400}
                  height={200}
                  className={styles.cardImage}
                />
                <div className={styles.cardText}>{topic.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
