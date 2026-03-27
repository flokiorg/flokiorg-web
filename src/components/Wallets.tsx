import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "@styles/scss/Wallets.module.scss";

const WalletCard = ({ card }: { card: any }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.cardWrapper} ${dropdownOpen ? styles.cardWrapperActive : ""}`}>
      <div className={`${styles.card} ${styles.cardContent}`}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>{card.title}</div>
          <p className={styles.cardDescription}>{card.description}</p>
        </div>
        <div className={styles.cardActions}>
          {card.link && card.button && (
            <a
              href={card.link}
              target="_blank"
              rel="noreferrer"
              className={`${styles.cardButton} no-external-icon`}
            >
              {card.button}
            </a>
          )}
          {card.links && (
            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <button
                className={`${styles.cardButton} no-external-icon`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {card.button || "Select"} ▾
              </button>
              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {card.links.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.dropdownItem}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.label}
                      {link.tag && (
                        <span className={styles.dropdownTag}>{link.tag}</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Wallets = () => {
  const { t } = useTranslation();
  const cards: any = t("wallets.cards", { returnObjects: true });

  return (
    <section className={styles.walletsSection} id="wallets">
      <div className={styles.container}>
        <div className={styles.cardGrid}>
          {cards.map((card: any, index: number) => (
            <WalletCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wallets;
