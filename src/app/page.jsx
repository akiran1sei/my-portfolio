import Image from "next/image";
import styles from "../styles/page.module.css";
// import Link from "next/link";

const home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.home_contents}>
          <div className={styles.home_notebook}>
            <div className={styles.home_notebook_spine}></div>
            <div className={styles.home_notebook_cover}></div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default home;
