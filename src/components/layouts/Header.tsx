import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/common/LanguageSwitcher";
import styles from "@styles/scss/Header.module.scss";

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const menu: any = t("header.menu", { returnObjects: true });
  const socials: any = t("header.socials", { returnObjects: true });

  const handleNavClick = (link: string) => (e: React.MouseEvent) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const id = link.slice(1);

      if (router.pathname !== "/") {
        router.push(`/#${id}`);
      } else {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (link.startsWith("/")) {
      e.preventDefault();
      router.push(link);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Link href="/" legacyBehavior>
            <a>
              <img src="/logo.svg" alt="Logo" width={180} height="auto" />
            </a>
          </Link>
        </div>

        <nav className={styles.navigation}>
          {menu.map((nav: any, i: number) =>
            nav.link.startsWith("http") ? (
              <a
                key={i}
                href={nav.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {nav.label}
              </a>
            ) : (
              <a key={i} href={nav.link} onClick={handleNavClick(nav.link)}>
                {nav.label}
              </a>
            )
          )}
        </nav>

        <div className={styles.rightSideContent}>
          <div className={styles.socialIcons}>
            {socials.map((social: any, i: number) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  width={social.width || 16}
                  height={16}
                />
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
