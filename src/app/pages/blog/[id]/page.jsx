"use client";
import styles from "@/styles/page.module.css";
import useSWR from "swr";
import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackButton } from "@/components/Buttons/BackButton";
import { BlogButton } from "@/components/Buttons/BlogButton";

const Article = (request) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // ページ読み込み時に実行される処理
    setIsActive(true);
  }, []); // 空の配列を渡すことで、マウント時に一度だけ実行される
  const { data, error } = useSWR(
    `/pages/api/blog/${request.params.id}`,
    fetcher,
    {
      initial: true, // 初回レンダリング時に必ず更新
      onBackgroundUpdate: true, // バックグラウンドで再読み込み
      revalidateOnMount: true, // マウント時に再検証
      revalidateOnReconnect: true, // 再接続時に再検証
    }
  );
  if (error) return <div>エラーが発生しました。</div>;
  if (!data) return <div>データを取得中</div>;
  const blogItem = data.value;
  return (
    <div className={styles.contents}>
      <UpButton />

      <section
        className={`${styles.article_section} ${
          isActive ? styles.active : " "
        }`}
      >
        <h2 className={styles.page_title}>Article</h2>
        <div className={styles.article_contents}>
          <article className={styles.article_post}>
            <h2 className={styles.article_post_title}>{blogItem.postTitle}</h2>
            <figure className={styles.article_post_img}>
              <Image
                width={150}
                height={150}
                src={"/images/mt-huji-sp.svg"}
                alt="登山登頂時"
              />
              <figcaption>富士山登頂時</figcaption>
            </figure>
            <time dateTime="2024-04-01" className={styles.article_post_date}>
              {blogItem.postDate}
            </time>

            <p className={styles.article_post_text}>{blogItem.postMessage} </p>
          </article>
          <div className={styles.article_button}>
            <BackButton />
          </div>
        </div>
      </section>
    </div>
  );
};
const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};
export default Article;
