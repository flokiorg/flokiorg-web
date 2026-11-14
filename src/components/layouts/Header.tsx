import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/common/LanguageSwitcher";
import styles from "@styles/scss/Header.module.scss";

const SCROLL_DELTA = 10; // minimum scroll distance to trigger hide/show
const SCROLL_TOP_THRESHOLD = 100; // always show header when near the top

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

  // --- Smart scroll: hide on scroll-down, reveal on scroll-up ---
  const [hidden, setHidden] = useState(false);
  const prevScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    // Always show when near the top of the page
    if (currentY <= SCROLL_TOP_THRESHOLD) {
      setHidden(false);
      prevScrollY.current = currentY;
      return;
    }

    const delta = currentY - prevScrollY.current;

    if (delta > SCROLL_DELTA) {
      // Scrolling DOWN → hide
      setHidden(true);
      prevScrollY.current = currentY;
    } else if (delta < -SCROLL_DELTA) {
      // Scrolling UP → show
      setHidden(false);
      prevScrollY.current = currentY;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // --- Announcement bar height CSS variable ---
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

  const wrapperClassName = [
    styles.headerWrapper,
    hidden ? styles.headerHidden : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
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
    </div>
  );
};

export default Header;
