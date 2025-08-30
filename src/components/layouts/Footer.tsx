import React from "react";
import styles from "@styles/scss/Footer.module.scss";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/common/LanguageSwitcher";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();
  const columns: any = t("footer.columns", { returnObjects: true });

  const isInternal = (href: string) => href.startsWith("/");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {columns.map((col: any, index: number) => (
            <div className={styles.column} key={index}>
              <h4
                className={styles.columnTitle}
                dangerouslySetInnerHTML={{ __html: col.title }}
              ></h4>
              {col.links.every((link: any) => link.icon) ? (
                <div className={styles.iconGroup}>
                  {col.links.map((link: any, i: number) =>
                    isInternal(link.link) ? (
                      <Link key={i} href={link.link}>
                        <img src={link.icon} alt={link.label} />
                      </Link>
                    ) : (
                      <a
                        key={i}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={link.icon} alt={link.label} />
                      </a>
                    )
                  )}
                </div>
              ) : (
                <ul className={styles.linkList}>
                  {col.links.map((link: any, i: number) => (
                    <li key={i}>
                      {isInternal(link.link) ? (
                        <Link href={link.link}>{link.label}</Link>
                      ) : (
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {index === 0 && (
                <div className={styles.languageWrap}>
                  <LanguageSwitcher />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
