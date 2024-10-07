"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";
import CodeEditor from "@/components/CodeEditor";
import styles from "@/styles/page.module.css";
import DOMPurify from "dompurify";
import { DashboardHeader } from "@/components/Header/DashboardHeader";
import { SignedIn, SignedOut } from "@clerk/nextjs";
const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogPost = () => {
  const [currentContent, setCurrentContent] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const [preview, setPreview] = useState(""); // プレビュー用の state

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
    const cleanContent = DOMPurify.sanitize(newCode); // DOMPurify を使用
    setPreview(cleanContent); // プレビューを更新
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
        cache: "no-cache",
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
    <option
      key={img._id}
      value={JSON.stringify({ url: img.url, name: img.name })}
    >
      {img.name}
    </option>
  ));

  const handleChange = (e) => {
    const parsedObject = JSON.parse(e.target.value);
    setAlt(parsedObject.name);

    setImage(parsedObject.url);
  };

  return (
    <>
      <DashboardHeader />
      <section
        className={`${styles.post_section} ${isActive ? styles.active : ""}`}
      >
        <h2 className={styles.page_title}>POST</h2>
        <SignedIn>
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
                    <option value="">
                      {alt ? alt : "選択してください"}

                      {}
                    </option>
                    {options}
                  </select>

                  <div className={styles.thumbnail_images}>
                    {image ? (
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt={alt}
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
                </div>
                <CodeEditor
                  value={currentContent}
                  onChange={handleCodeChange}
                />
              </div>
              <div className={styles.post_form_preview}>
                <h3>プレビュー</h3>
                <div
                  className={styles.post_preview_content}
                  dangerouslySetInnerHTML={{ __html: preview }}
                />
              </div>
              <div className={styles.post_form_button}>
                <button
                  type="submit"
                  className={styles.post_form_button_submit}
                >
                  投稿
                </button>
              </div>
            </form>
          </div>
          {error && <p className={styles.error_message}>{error}</p>}
        </SignedIn>
        <SignedOut>
          <p className={styles.signOut_text}>サインインしてください。</p>
        </SignedOut>
      </section>
    </>
  );
};

export default BlogPost;
