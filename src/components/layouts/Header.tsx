import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/common/LanguageSwitcher";
import styles from "@styles/scss/Header.module.scss";

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const menu: any = t("header.menu", { returnObjects: true });
  const socials: any = t("header.socials", { returnObjects: true });
  const announcementRaw = t("header.announcement", {
    returnObjects: true,
  }) as
    | {
        message?: string;
        ctaLabel?: string;
        link?: string;
      }
    | undefined;

  const announcement =
    typeof announcementRaw === "object" && announcementRaw !== null
      ? announcementRaw
      : {};

  const { message = "", ctaLabel = "", link = "" } = announcement;
  const showAnnouncement = Boolean(message && ctaLabel && link);
  const announcementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showAnnouncement) {
      document.documentElement.style.removeProperty("--announcement-height");
      return;
    }

    const updateHeight = () => {
      if (announcementRef.current) {
        document.documentElement.style.setProperty(
          "--announcement-height",
          `${announcementRef.current.offsetHeight}px`,
        );
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      document.documentElement.style.removeProperty("--announcement-height");
    };
  }, [showAnnouncement, message, ctaLabel]);

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
    <>
      {showAnnouncement && (
        <div ref={announcementRef} className={styles.announcementBar}>
          <div className={styles.announcementInner}>
            <span className={styles.announcementText}>{message}</span>
            <a
              className={styles.announcementLink}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}

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
            ),
          )}
        </nav>

        <div className={styles.rightSideContent}>
          <Link href="/donate" legacyBehavior>
            <a className={styles.donateButton}>
              <span className={styles.donateHeart} aria-hidden="true" />
              {t("header.donateLabel")}
            </a>
          </Link>
          <div className={styles.socialIcons}>
            {socials.map((social: any, i: number) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                className="no-external-icon"
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
          <div className={styles.languageSwitcherWrapper}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;
