"use client";
import CodeEditor from "@/components/CodeEditor";
import styles from "@/styles/page.module.css";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const [currentContent, setCurrentContent] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setDate(`${year}/${month}/${day}`);
    setIsActive(true);
  }, []);

  const handleCodeChange = (newCode) => {
    setCurrentContent(newCode);
  };
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      console.log(currentContent);
      const response = await fetch("/pages/api/post", {
        method: "POST",
        body: JSON.stringify({
          postTitle: title,
          postMessage: currentContent,
          postDate: date,
          imageUrl: uploadedImageUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonData = await response.json();

      if (jsonData.success) {
        setCurrentContent("");
        setTitle("");
        setDate("");
        setUploadedImageUrl("");
      } else {
        setError(jsonData.message || "投稿に失敗しました。");
      }
      // alert(jsonData.message); // 不要なアラートを削除
      return location.reload(); // 成功時にもリロードするのは好ましくない（確認が必要です）
    } catch (error) {
      setError("エラーが発生しました。もう一度お試しください。");
    }
  };

  return (
    <div className={styles.contents}>
      <section
        className={`${styles.post_section} ${isActive ? styles.active : ""}`}
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
              <CodeEditor value={currentContent} onChange={handleCodeChange} />
            </div>
            <div className={styles.post_form_button}>
              <button type="submit" className={styles.post_form_button_submit}>
                投稿
              </button>
            </div>
          </form>
        </div>
        {error && <p className={styles.error_message}>{error}</p>}
      </section>
    </div>
  );
};

export default BlogPost;
