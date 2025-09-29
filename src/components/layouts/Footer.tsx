import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/common/LanguageSwitcher";
import styles from "@styles/scss/Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  const columns: any = t("footer.columns", { returnObjects: true });

  const isInternal = (href: string) =>
    href.startsWith("/") || href.startsWith("mailto:");

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
                        className="no-external-icon"
                        target="_blank"
                      >
                        <img src={link.icon} alt={link.label} />
                      </a>
                    ),
                  )}
                </div>
              ) : (
                <ul className={styles.linkList}>
                  {col.links.map((link: any, i: number) => (
                    <li key={i}>
                      {
                        <a
                          href={link.link}
                          target={isInternal(link.link) ? "_self" : "_blank"}
                          className={styles.externalLink}
                        >
                          {link.label}
                        </a>
                      }
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
