"use client";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Link from "next/link";

const Works = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // ページ読み込み時に実行される処理
    setIsActive(true);
  }, []); // 空の配列を渡すことで、マウント時に一度だけ実行される
  return (
    <div className={styles.contents}>
      <UpButton />

      <section
        className={`${styles.works_section} ${isActive ? styles.active : " "}`}
      >
        <h2 className={styles.page_title}>
          Works <br />
          <span className={styles.page_subtitle}>制作物一覧</span>
        </h2>
        <div className={styles.works_box}>
          <div className={styles.works_card}>
            <h3 className={styles.works_app_title}>
              コーヒー アプリ
              <br className={styles.pc} />
              『Tasting Note』
            </h3>
            <div className={styles.works_image}>
              <Image
                src="/images/works/tasting_note/tasting_note-pc-1.png"
                alt="Tasting Note"
                width={600}
                height={324}
                priority
              />
            </div>

            <button className={styles.works_app_link_button} type="button">
              <Link
                className={styles.works_app_link}
                href={"/pages/works/tasting_note"}
                passHref
              >
                『Tasting Note』は、こちらからどうぞ！
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.works_box}>
          <div className={styles.works_card}>
            <h3 className={styles.works_app_title}>
              コーヒー アプリ
              <br className={styles.pc} />
              『Coffee Note』
            </h3>
            <div className={styles.works_image}>
              <Image
                src="/images/works/coffee_note/feature_graphic.png"
                alt="Coffee Note"
                width={1024}
                height={500}
                priority
              />
            </div>

            <button className={styles.works_app_link_button} type="button">
              <Link
                className={styles.works_app_link}
                href={"/pages/works/coffee_note"}
                passHref
              >
                『Coffee Note』は、こちらからどうぞ！
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Works;
