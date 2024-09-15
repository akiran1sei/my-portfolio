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
        {/* <Image
          src="/images/beans-sp.png"
          width={300}
          height={300}
          alt="珈琲豆のイラスト"
        /> */}
      </div>
      <h1 className={styles.home_gradation_title}>
        <button type="button">
          <Link href={"/pages/about"} passHref={false}>
            Portfolio
          </Link>
        </button>
      </h1>
    </div>
  );
}
