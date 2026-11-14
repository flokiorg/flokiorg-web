import React from "react";
import { useTranslation } from "react-i18next";
import { ASSETS } from "@constants/config";
import AssetCard from "@components/common/AssetCard";
import SeoHead from "@components/common/SeoHead";
import styles from "@styles/scss/AssetsPage.module.scss";

const AssetsPage: React.FC = () => {
  const { t } = useTranslation();
  const pageTitle = t("assets.title", { defaultValue: "Assets" });
  const downloadLabel = t("assets.download", { defaultValue: "Download" });
  const openLabel = t("assets.open", { defaultValue: "Open" });

  return (
    <>
      <SeoHead title={pageTitle} canonicalPath="/assets" />
      <main className={styles.main}>
        <div className={styles.containerBoxed}>
          <section className={styles.assetsSection}>
            <div className={styles.container}>
              <h1 className={styles.pageTitle}>{pageTitle}</h1>
              <div className={styles.grid}>
                {ASSETS.map((a) => (
                  <AssetCard
                    key={a.link}
                    title={a.title}
                    link={a.link}
                    width={a.width}
                    height={a.height}
                    downloadLabel={downloadLabel}
                    openLabel={openLabel}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AssetsPage;
