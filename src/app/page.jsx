"use client";
import { Gradation } from "@/components/Home/Gradation";
import styles from "@/styles/page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_wrap}>
          <div className={styles.home_contents}>
            <Gradation />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
