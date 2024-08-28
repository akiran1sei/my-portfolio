import { StartButton } from "@/components/Buttons/StartButton";
import styles from "@/styles/page.module.css";
import Image from "next/image";

const home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_wrapper}>
          <div className={`${styles.home_contents} ${styles.action}`}>
            {/* <div className={styles.home_notebook}>
              <div className={styles.home_notebook_spine}></div>
              <div className={styles.home_notebook_cover}>
                <p className={styles.portfolio_name}>
                  Portfolio
                  <span
                    className={`${styles.border_bottom} ${styles.home}`}
                  ></span>
                </p>
                <p className={styles.my_name}>
                  Akira Nakamori
                  <span
                    className={`${styles.border_bottom} ${styles.home}`}
                  ></span>
                </p>
                <div className={styles.home_button}>
                  <StartButton />
                </div>
              </div>
            </div> */}
            <div className={styles.home_notebook_index}>
              <Image
                src="/images/bg-sp.png"
                alt="Xの画像"
                width={576}
                height={1024}
                className={styles.bg_img}
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default home;
