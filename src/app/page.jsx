import Image from "next/image";
import styles from "./page.module.css";

const home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.home_contents}>Home</div>
      </div>
    </main>
  );
};
export default home;
