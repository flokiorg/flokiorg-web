import React, { useState, useEffect } from "react";
import styles from "@styles/scss/LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const languages: any = t("header.langs", { returnObjects: true });
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className={styles.languageSwitcher}>
      <select
        value={selectedLanguage}
        onChange={changeLanguage}
        className={styles.selectWithLabel}
      >
        {languages.map((lang: any, index: number) => (
          <option key={index} value={lang.value}>
            {lang.value.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
