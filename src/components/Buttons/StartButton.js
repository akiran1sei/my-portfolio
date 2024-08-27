import styles from "@/styles/page.module.css";
import Image from "next/image";
export function StartButton() {
  return (
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
      <span className={styles.startCircle}></span>
    </button>
  );
}
