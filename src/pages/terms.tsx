import styles from "@styles/scss/Privacy.module.scss";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();
  const sections = t("terms.sections", { returnObjects: true }) as Array<{
    title: string;
    subtitle?: string;
    description: string;
  }>;

  return (
    <main className={styles.main}>
      <div className={styles.containerBoxed}>
        <h1 className={styles.title}>{t("terms.title")}</h1>
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
  );
};

export default Privacy;
