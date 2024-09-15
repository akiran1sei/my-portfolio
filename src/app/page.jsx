"use client";
import { Gradation } from "@/components/Home/Gradation";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_wrapper}>
          <div className={styles.home_contents}>
            <Gradation />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
