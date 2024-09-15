"use client";
import styles from "@/styles/page.module.css";
import dotenv from "dotenv";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
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
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    router.push("/pages/contact/confirmation");
    //   try {
    //     setError(null);
    //   } catch (error) {
    //   }
  };

  return (
    <div className={styles.contents}>
      <section
        className={`${styles.contact_section} ${
          isActive ? styles.active : " "
        }`}
      >
        <h2 className={styles.page_title}>Contact</h2>
        <div className={styles.contact_form_box}>
          <form onSubmit={handleContactSubmit} className={styles.contact_form}>
            <div className={styles.contact_form_title}>
              <label htmlFor="title">タイトル名</label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // required
              />
            </div>
            <div className={styles.contact_form_subject}>
              <label htmlFor="subject">件名</label>
              <br />
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                // required
              />
            </div>
            <div className={styles.contact_form_date}>{date}</div>

            <div className={styles.contact_form_contents}>
              <label htmlFor="contents">内容</label>
              <br />
              <textarea
                type="text"
                name="contents"
                id="contents"
                className={styles.contact_form_textarea}
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                rows="10"
                cols="30"
                placeholder="ここにテキストを入力してください"
                // required
              ></textarea>
            </div>
            <div className={styles.contact_form_button}>
              <button
                type="submit"
                className={styles.contact_form_button_submit}
              >
                次へ
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
