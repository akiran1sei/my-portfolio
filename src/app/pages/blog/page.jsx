"use client";
import styles from "@/styles/page.module.css";
import useSWR from "swr";
import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const [isActive, setIsActive] = useState(false);
  function truncateText(text, maxLength) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }
  useEffect(() => {
    // ページ読み込み時に実行される処理
    setIsActive(true);
  }, []); // 空の配列を渡すことで、マウント時に一度だけ実行される
  const { data, error } = useSWR(`/pages/api/blog/readall`, fetcher, {
    initial: true, // 初回レンダリング時に必ず更新
    onBackgroundUpdate: true, // バックグラウンドで再読み込み
    revalidateOnMount: true, // マウント時に再検証
    revalidateOnReconnect: true, // 再接続時に再検証
  });
  if (error) return <div>エラーが発生しました。</div>;
  if (!data) return <div>データを取得中...</div>;

  return (
    <div className={styles.contents}>
      <UpButton />

      <section
        className={`${styles.blog_section} ${isActive ? styles.active : " "}`}
      >
        <h2 className={styles.page_title}>Blog</h2>
        <div className={styles.blog_contents}>
          {data.value.map((item) => (
            <article className={styles.blog_post} key={item._id}>
              <h2 className={styles.blog_post_title}>{item.postTitle}</h2>
              <figure className={styles.blog_post_img}>
                <Image
                  width={150}
                  height={150}
                  src={"/images/mt-huji-sp.svg"}
                  alt="登山登頂時"
                />
                <figcaption>富士山登頂時</figcaption>
              </figure>
              <time dateTime={item.postDate} className={styles.blog_post_date}>
                {item.postDate}
              </time>

              <p className={styles.blog_post_text}>
                {truncateText(item.postMessage, 100)}
              </p>
              <div className={styles.blog_post_next}>
                <Link href={`/pages/blog/${item._id}`} passHref={false}>
                  <span>&gt;</span>
                  <span>続きを読む</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};
export default Blog;
