import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/page.module.css";

export function Notebook() {
  <div className={styles.home_notebook}>
    <div className={styles.home_notebook_spine}></div>
    <div className={styles.home_notebook_spine_under}></div>
    <div className={styles.home_notebook_cover}>
      <h1 className={styles.portfolio_name}>
        <span className={`${styles.border_bottom} ${styles.home}`}>
          Portfolio
        </span>
      </h1>
      <p className={styles.my_name}>
        <span className={`${styles.border_bottom} ${styles.home}`}>
          Akira Nakamori
        </span>
      </p>
      <div className={styles.home_button}>
        <button className={styles.startButton} type="button">
          <span className={styles.startArrow}>
            <Image
              src="/images/south_east_arrow.svg"
              alt="矢印の画像"
              width={50}
              height={50}
              priority
            />
          </span>
          <Link href={"/pages/about"} passHref>
            <span className={styles.startCircle}></span>
          </Link>
        </button>
      </div>
      <div className={styles.home_notebook_bg}>
        <p className={styles.home_notebook_bg_text}>notebook</p>
      </div>
    </div>
    <div className={styles.home_notebook_bundle}>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
      <span className={styles.home_notebook_page}></span>
    </div>
    <div className={styles.home_notebook_bundle_under}>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
      <span className={styles.home_notebook_page_under}></span>
    </div>
  </div>;
}
