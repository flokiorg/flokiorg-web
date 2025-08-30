import styles from "@styles/scss/DonationPage.module.scss";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const DonationPage = () => {
  const { t } = useTranslation();
  const Donation = dynamic(() => import("@components/Donation"), {
    ssr: false,
  });

  return (
    <main className={styles.main}>
      <div className={styles.containerBoxed}>
        <Donation />
      </div>
    </main>
  );
};

export default DonationPage;
