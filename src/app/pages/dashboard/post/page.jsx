"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";
import CodeEditor from "@/components/CodeEditor";
import styles from "@/styles/page.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogPost = () => {
  const [currentContent, setCurrentContent] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

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
      const response = await fetch("/pages/api/post", {
        method: "POST",
        body: JSON.stringify({
          postTitle: title,
          postMessage: currentContent,
          postDate: date,
          postImage: image,
          postImageAlt: alt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonData = await response.json();

      if (jsonData.success) {
        setCurrentContent("");
        setTitle("");
        setImage("");
        // ユーザーに成功メッセージを表示
      } else {
        setError(jsonData.message || "投稿に失敗しました。");
      }
      alert("投稿が成功しました！");
      // オプション: 成功後にページをリロード
      return location.reload();
    } catch (error) {
      setError("エラーが発生しました。もう一度お試しください。");
    }
  };

  const { data, error: swrError } = useSWR(`/pages/api/blog/img`, fetcher);

  if (swrError) return <div>エラーが発生しました。</div>;
  if (!data) return <div>データを取得中...</div>;

  const options = data.value.map((img) => (
    <option key={img._id} value={img.url}>
      {img.url}
    </option>
  ));

  const handleChange = (e) => setImage(e.target.value);

  return (
    <section
      className={`${styles.post_section} ${isActive ? styles.active : ""}`}
    >
      <h2 className={styles.page_title}>POST</h2>

      <div className={styles.post_form_box}>
        <form onSubmit={handlePostSubmit} className={styles.post_form}>
          <div className={styles.post_form_title}>
            <label htmlFor="title">タイトル名</label>

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
            <label>投稿内容</label>

            <div className={styles.thumbnail_box}>
              <label className={styles.thumbnail_title}>サムネイル</label>
              <select
                name="thumbnail"
                id="thumbnail"
                value={image}
                onChange={handleChange}
                className={styles.thumbnail}
              >
                <option value="">選択してください</option>
                {options}
              </select>

              <div className={styles.thumbnail_images}>
                {image ? (
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={image}
                    priority
                  />
                ) : (
                  <Image
                    src="/images/no-image.jpg"
                    width={100}
                    height={100}
                    alt="no image"
                    priority
                  />
                )}
              </div>
              <div className={styles.thumbnail_images_alternative}>
                <label htmlFor="alt">代換テキスト</label>

                <input
                  type="text"
                  name="alt"
                  id="alt"
                  value={alt}
                  onChange={(e) => setAlt(e.target.value)}
                  // required
                />
              </div>
            </div>
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
  );
};

export default BlogPost;
