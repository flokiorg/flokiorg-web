import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "@styles/scss/Slider.module.scss";

const Slider = () => {
  const { t } = useTranslation();
  const textElementRef = useRef<HTMLSpanElement>(null);

  const carousel: any = t("slider.carousel", { returnObjects: true });

  useEffect(() => {
    let isCancelled = false;

    const waitForMs = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const typeSentence = async (sentence: string, delay = 100) => {
      if (!textElementRef.current) return;
      textElementRef.current.innerHTML = "";

      for (let i = 0; i < sentence.length; i++) {
        if (isCancelled) return;
        textElementRef.current.innerHTML += sentence[i];
        await waitForMs(delay);
      }
    };

    const deleteSentence = async (delay = 100) => {
      if (!textElementRef.current) return;

      while (textElementRef.current?.innerHTML.length > 0) {
        if (isCancelled) return;
        textElementRef.current.innerHTML =
          textElementRef.current.innerHTML.slice(0, -1);
        await waitForMs(delay);
      }
    };

    const handleCarousel = async () => {
      let index = 0;
      while (!isCancelled) {
        await typeSentence(carousel[index], 100);
        await waitForMs(1500);
        await deleteSentence(100);
        await waitForMs(500);
        index = (index + 1) % carousel.length;
      }
    };

    handleCarousel();
    return () => {
      isCancelled = true;
    };
  }, [carousel]);

  return (
    <div className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.title}>{t("slider.title")}</div>
        <div className={styles.typingContainer}>
          <span ref={textElementRef} className={styles.typingText}></span>
          <span className={styles.cursor}>_</span>
        </div>
        <div className={styles.subtitle}>{t("slider.subtitle")}</div>
      </div>
    </div>
  );
};

export default Slider;
