import styles from "@styles/scss/HomePage.module.scss";
import dynamic from "next/dynamic";

const Home = () => {
  const Slider = dynamic(() => import("@components/Slider"), { ssr: false });
  const About = dynamic(() => import("@components/About"), { ssr: false });
  const Roadmap = dynamic(() => import("@components/Roadmap"), { ssr: false });
  const Wallets = dynamic(() => import("@components/Wallets"), { ssr: false });
  const Faq = dynamic(() => import("@components/Faq"), { ssr: false });
  const Topics = dynamic(() => import("@components/Topics"), { ssr: false });
  const Donation = dynamic(() => import("@components/Donation"), {
    ssr: false,
  });
  const Contact = dynamic(() => import("@components/Contact"), { ssr: false });

  return (
    <main className={styles.main}>
      <div className={styles.containerBoxed}>
        <Slider />
        <About />
        <Donation />
        <Roadmap />
        <Wallets />
        <Faq />
        <Topics />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
