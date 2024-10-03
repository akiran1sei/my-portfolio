"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import Link from "next/link";

export function UpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 任意のスクロール位置 (例えば、100px)を超えたらボタンを表示
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link href="#header" passHref>
      <button
        className={`${styles.upButton} ${
          showButton ? styles.show : styles.hide
        }`}
        type="button"
        id="upButton"
      >
        ▲
      </button>
    </Link>
  );
}
