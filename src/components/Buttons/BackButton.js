"use client";
import styles from "@/styles/page.module.css";
import { useRouter } from "next/navigation";
export function BackButton() {
  const router = useRouter();
  const handleBackButton = (e) => {
    e.preventDefault();

    return router.back();
  };
  return (
    <button
      type="button"
      className={styles.backButton}
      onClick={handleBackButton}
    >
      戻る
    </button>
  );
}
