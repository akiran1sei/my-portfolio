//pages/contact/page.jsx
"use client";
import styles from "@/styles/page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    email: "",
    contents: "",
    // 送信者の名前を追加
    name: "",
  });
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/pages/api/contact", {
        method: "POST",
        body: { ...formData },
      });
      const data = await response.json();

      alert(data.message);
      router.push("/pages/contact/confirmation");
    } catch (error) {
      console.error(error);
      setError("送信に失敗しました。");
    }
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setDate(`${year}/${month}/${day}`);
    setIsActive(true);
  }, []);

  return (
    <div className={styles.contents}>
      <section
        className={`${styles.contact_section} ${isActive ? styles.active : ""}`}
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
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.contact_form_subject}>
              <label htmlFor="subject">件名</label>
              <br />
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.contact_form_title}>
              <label htmlFor="name">お名前</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.contact_form_email}>
              <label htmlFor="email">メールアドレス</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.contact_form_date}>{date}</div>
            <div className={styles.contact_form_contents}>
              <label htmlFor="contents">内容</label>
              <br />
              <textarea
                name="contents"
                id="contents"
                className={styles.contact_form_textarea}
                value={formData.contents}
                onChange={handleChange}
                rows="10"
                cols="30"
                placeholder="ここにテキストを入力してください"
                required
              ></textarea>
            </div>
            <div className={styles.contact_form_button}>
              <button
                type="submit"
                className={styles.contact_form_button_submit}
              >
                送信
              </button>
            </div>
          </form>
          {error && <p className={styles.error_message}>{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default Contact;
