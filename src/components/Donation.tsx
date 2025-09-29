import React from "react";
import { useTranslation } from "react-i18next";
import {
  DONATION_WOF_URL,
  DONATION_ECOSYSTEM_URL,
} from "@constants/config";
import styles from "@styles/scss/Donations.module.scss";

type DonationVariant = "default" | "ecosystem";

type DonationProps = {
  variant?: DonationVariant;
};

const Donation: React.FC<DonationProps> = ({ variant = "default" }) => {
  const { t, i18n } = useTranslation();

  const baseKey = variant === "ecosystem" ? "donationEcosystem" : "donation";
  const sectionId =
    variant === "ecosystem" ? "ecosystem-donation" : "donation";

  const getOptionalString = (key: string): string =>
    i18n.exists(key) ? String(t(key)) : "";

  const getArray = (key: string): string[] => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? (value as string[]) : [];
  };

  const descriptions = getArray(`${baseKey}.descriptions`);
  const descriptionList = getArray(`${baseKey}.descriptionList`);

  const sectionLabel = getOptionalString(`${baseKey}.sectionLabel`);
  const title = getOptionalString(`${baseKey}.title`);
  const titleHighlight = getOptionalString(`${baseKey}.titleHighlight`);
  const subtitle = getOptionalString(`${baseKey}.subtitle`);
  const imageTitle = getOptionalString(`${baseKey}.imageTitle`);
  const imageSubtitle = getOptionalString(`${baseKey}.imageSubtitle`);
  const imageSrc = getOptionalString(`${baseKey}.imageSrc`) || "/img/wof.png";
  const imageAlt = getOptionalString(`${baseKey}.imageAlt`) || "Donation";

  const shouldRenderImageColumn =
    variant !== "ecosystem" && (imageTitle || imageSubtitle);
  const shouldShowBullets = variant !== "ecosystem";

  const primaryButtonLabel = getOptionalString(`${baseKey}.buttonLabel`);
  const defaultButtonUrl =
    variant === "ecosystem" ? DONATION_ECOSYSTEM_URL : DONATION_WOF_URL;
  const primaryButtonUrl =
    getOptionalString(`${baseKey}.buttonUrl`) || defaultButtonUrl;

  const secondaryButtonLabel = getOptionalString(
    `${baseKey}.secondButtonLabel`
  );
  const secondaryButtonUrl =
    getOptionalString(`${baseKey}.secondButtonUrl`) ||
    getOptionalString(`${baseKey}.wofpaperUrl`);
  const hasSecondaryButton = Boolean(
    secondaryButtonLabel && secondaryButtonUrl
  );

  return (
    <section className={styles.donationSection} id={sectionId}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.headerBox}>
            {sectionLabel && (
              <div id="donationLabel" className={styles.label}>
                {sectionLabel}
              </div>
            )}
            {(title || titleHighlight) && (
              <div className={styles.title}>
                {title} {titleHighlight && <span>{titleHighlight}</span>}
              </div>
            )}
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          </div>

          <div className={styles.descriptions}>
            {descriptions.map((html, idx) => (
              <p
                key={idx}
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>

          {descriptionList.length > 0 && (
            <ul className={styles.descriptionList}>
              {descriptionList.map((item, idx) => (
                <li key={idx}>
                  {shouldShowBullets && (
                    <strong className={styles.bulletPoint}>{"> "}</strong>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.buttonWrapper}>
            {hasSecondaryButton && (
              <a
                href={secondaryButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.sectionButton} ${styles.secondButton}`}
              >
                {secondaryButtonLabel}
              </a>
            )}

            {primaryButtonLabel && (
              <a
                href={primaryButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sectionButton}
              >
                <span className={styles.icon}>💜</span>
                {primaryButtonLabel}
              </a>
            )}
          </div>
        </div>

        {shouldRenderImageColumn && (
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <img src={imageSrc} className={styles.image} alt={imageAlt} />
              {imageTitle && (
                <div className={styles.imageTitle}>{imageTitle}</div>
              )}
              {imageSubtitle && (
                <div className={styles.imageSubtitle}>{imageSubtitle}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Donation;
