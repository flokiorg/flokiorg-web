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
                          className={styles.externalLink}
                        >
                          {link.label}
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="iconExternalLink_nPIU"
                          >
                            <path
                              fill="currentColor"
                              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                            ></path>
                          </svg>
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
