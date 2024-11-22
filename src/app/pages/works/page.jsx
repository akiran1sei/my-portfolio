"use client";
import styles from "@/styles/page.module.css";

import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <h2 className={styles.page_title}>Works Select</h2>
        <div className={styles.works_selectWrap}>
          <div className={styles.works_selectApp}>
            <nav className={styles.works_selectNav}>
              <ul className={styles.works_selectList}>
                <li className={styles.works_selectItem}>
                  <div
                    className={`${styles.works_gallery_image} ${styles.works_img_1}`}
                  ></div>
                  <Link href={"/pages/works/tastingnote"} passHref>
                    <span>『Tasting Note』</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Works;
