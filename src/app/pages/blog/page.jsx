"use client";
import styles from "@/styles/page.module.css";

import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";

const Blog = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // ページ読み込み時に実行される処理
    setIsActive(true);
  }, []); // 空の配列を渡すことで、マウント時に一度だけ実行される
  return (
    <div className={styles.contents}>
      <UpButton />

      <section
        className={`${styles.blog_section} ${isActive ? styles.active : " "}`}
      >
        <h2 className={styles.page_title}>Blog</h2>
        <div className={styles.blog_contents}>
          <div className={styles.blog_card}></div>
        </div>
      </section>
    </div>
  );
};
export default Blog;
