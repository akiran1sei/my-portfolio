"use client";
import styles from "@/styles/page.module.css";
import dotenv from "dotenv";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const Confirmation = () => {
  dotenv.config();
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [contents, setContents] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので+1して、桁数が1桁の場合は頭に0を追加
    const day = String(today.getDate()).padStart(2, "0");
    setDate(`${year}/${month}/${day}`);
    // ページ読み込み時に実行される処理
    setIsActive(true);
  }, []); // 空の配列を渡すことで、マウント時に一度だけ実行される
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      // 送信処理 (API呼び出しなど)
      // const response = await fetch("/api/submit", {
      //   method: "POST",
      //   // ...
      // });
      // if (!response.ok) {
      //   throw new Error("送信に失敗しました");
      // }
      alert("送信が完了しました。");
      return router.push("/pages/contact/confirmation");
    } catch (error) {
      console.error(error);
      setError(error.message || "予期せぬエラーが発生しました。");
    }
  };

  return (
    <div className={styles.contents}>
      <section
        className={`${styles.confirmation_section} ${
          isActive ? styles.active : " "
        }`}
      >
        <h2 className={styles.page_title}>Confirmation</h2>
        <div className={styles.confirmation_form_box}>
          <form onSubmit={handleSubmit} className={styles.confirmation_form}>
            <div className={styles.confirmation_form_title}>
              <span className={styles.confirmation_form_email_title}>
                タイトル名
              </span>
              <br />
              {"はじめまして"}
            </div>
            <div className={styles.confirmation_form_subject}>
              <span className={styles.confirmation_form_email_subject}>
                件名
              </span>
              <br />
              {"お問い合わせ"}
            </div>

            <div className={styles.confirmation_form_contents}>
              <span className={styles.confirmation_form_email_contents}>
                内容
              </span>
              <br />
              {
                "アプリ『Tasting Note』について、詳しく教えてほしくご連絡いたしました。下記のご連絡先まで、返答をください。********@sample.con"
              }
            </div>
            <div className={styles.confirmation_form_button}>
              <button
                type="submit"
                className={styles.confirmation_form_button_submit}
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Confirmation;
