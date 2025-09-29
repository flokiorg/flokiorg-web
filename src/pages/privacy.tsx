import React from "react";
import { useTranslation } from "react-i18next";
import SeoHead from "@components/common/SeoHead";
import { ROUTE_SEO } from "@constants/seo";
import styles from "@styles/scss/PrivacyPage.module.scss";

const PrivacyPage = () => {
  const { t } = useTranslation();
  const sections = t("privacy.sections", { returnObjects: true }) as Array<{
    title: string;
    subtitle?: string;
    description: string;
  }>;

  return (
    <>
      <SeoHead {...ROUTE_SEO["/privacy"]} />
      <main className={styles.main}>
        <div className={styles.containerBoxed}>
          <h1 className={styles.title}>{t("privacy.title")}</h1>
          <div className={styles.sectionList}>
            {sections.map(({ title, subtitle, description }, index) => (
              <section key={index} className={styles.section}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {subtitle?.trim() && (
                  <h3 className={styles.sectionSubtitle}>{subtitle}</h3>
                )}
                <p className={styles.sectionDescription}>{description}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPage;
