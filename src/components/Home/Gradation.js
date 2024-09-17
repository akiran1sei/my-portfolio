import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/page.module.css";

export function Gradation() {
  return (
    <div className={styles.home_gradation}>
      <div className={styles.home_beans_img}>
        <Image
          src="/images/beans-pc.png"
          width={300}
          height={350}
          alt="珈琲豆のイラスト"
        />
      </div>
      <h1 className={styles.home_gradation_title}>
        <button type="button">
          <Link href={"/pages/about"} passHref={false}>
            <span className={styles.home_text_gradation}>Portfolio</span>
          </Link>
        </button>
      </h1>
    </div>
  );
}
