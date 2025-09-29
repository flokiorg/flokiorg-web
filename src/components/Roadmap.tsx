import React from "react";
import { useTranslation } from "react-i18next";
import styles from "@styles/scss/Roadmap.module.scss";

const Roadmap = () => {
  const { t } = useTranslation();
  const milestones: any = t("roadmap.milestones", { returnObjects: true });

  return (
    <section className={styles.roadmapSection} id="milestones">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.headerBox}>
            <div className={styles.label}>{t("roadmap.sectionLabel")}</div>
            <div className={styles.subtitle}>
              {t("roadmap.subtitle")}{" "}
              <span>{t("roadmap.subtitleHighlight")}</span>{" "}
              {t("roadmap.remainingSubtitle")}
            </div>
          </div>
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: t("roadmap.intro") }}/>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineItems}>
              {milestones.map((milestone: any, index: number) => (
                <div
                  key={index}
                  className={`${styles.milestoneItem} ${
                    index === milestones.length - 1 ? styles.lastItem : ""
                  }`}
                >
                  <div className={styles.milestoneDot}></div>
                  <div className={styles.milestoneContent}>
                    <h2>{milestone.title}</h2>
                    <span className={styles.milestoneLabel}>
                      {milestone.label}
                    </span>
                    {milestone.description && <p>{milestone.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
