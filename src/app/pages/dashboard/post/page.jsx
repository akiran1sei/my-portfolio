//src/app/pages/dashboard/post/page.jsx
"use client";
import Tiptap from "@/components/Tiptap";
import styles from "@/styles/page.module.css";
import dotenv from "dotenv";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BlogPost = () => {
  dotenv.config();
  const [currentContent, setCurrentContent] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
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
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/pages/api/post`,
        {
          method: "POST",
          body: JSON.stringify({
            postTitle: title,
            postMessage: currentContent,
            postDate: date,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        }
      );

      const jsonData = await response.json();

      alert(jsonData.message);
      if (jsonData.ok) {
        setCurrentContent("");
        setTitle("");
        setDate("");
      }
      return location.reload();
    } catch (error) {
      return alert("投稿エラー");
    }
  };

  return (
    <div className={styles.contents}>
      <section
        className={`${styles.post_section} ${isActive ? styles.active : " "}`}
      >
        <h2 className={styles.page_title}>POST</h2>
        <div className={styles.post_form_box}>
          <form onSubmit={handlePostSubmit} className={styles.post_form}>
            <div className={styles.post_form_title}>
              <label htmlFor="title">タイトル名</label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className={styles.post_form_date}>{date}</div>
            <div className={styles.post_form_contents}>
              <p>投稿内容</p>
              <br />

              <Tiptap
                onUpdate={(content) => setCurrentContent(content)}
                placeholder="ここに記事を入力してください..."
                editable={true}
                content={currentContent}
              />
            </div>
            <div className={styles.post_form_button}>
              <button type="submit" className={styles.post_form_button_submit}>
                投稿
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
