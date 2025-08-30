import React from "react";
import styles from "@styles/scss/Faq.module.scss";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  const questions: any = t("faq.questions", { returnObjects: true });

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <span className={styles.sectionTag}>{t("faq.sectionTag")}</span>
        <h2 className={styles.sectionTitle}>{t("faq.title")}</h2>

        <div className={styles.accordionList}>
          {questions.map((q: any, index: number) => (
            <div key={index} className={styles.accordionItem}>
              <details className={styles.accordionDetails}>
                <summary className={styles.accordionSummary}>
                  <div className={styles.accordionQuestion}>{q.question}</div>
                </summary>
                <div className={styles.accordionAnswer}>
                  <div
                    className={styles.accordionContent}
                    dangerouslySetInnerHTML={{ __html: q.answer }}
                  />
                  {index == 0 && q.linkLabel && (
                    <span>
                      (&quot;
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {q.linkLabel}
                      </a>
                      &quot;)
                    </span>
                  )}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
