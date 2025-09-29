import React from "react";
import { useTranslation } from "react-i18next";
import styles from "@styles/scss/Topics.module.scss";

type TopicCard = {
  title: string;
  image: string;
  link: string;
  description?: string;
};

const Topics = () => {
  const { t } = useTranslation();
  const topics =
    (t("topics.cards", { returnObjects: true }) as TopicCard[]) || [];

  return (
    <section className={styles.topicsSection} id="topics">
      <div className={styles.container}>
        <span className={styles.sectionTag}>{t("topics.sectionTag")}</span>
        <h2 className={styles.sectionTitle}>{t("topics.title")}</h2>

        <div className={styles.cardGrid}>
          {topics.map((topic, index) => (
            <div key={`${topic.title}-${index}`} className={styles.topicCard}>
              <a
                href={topic.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cardLink} no-external-icon`}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={topic.image}
                    alt={topic.title}
                    width={400}
                    height={200}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>{topic.title}</div>
                  {topic.description && (
                    <p className={styles.cardDescription}>{topic.description}</p>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
