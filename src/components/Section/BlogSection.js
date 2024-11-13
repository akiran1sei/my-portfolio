"use client";
import styles from "@/styles/page.module.css";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";

export function BlogSection() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const fetcher = async (url) => {
    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
      next: { revalidate: 0 },
    });
    return response.json();
  };

  const { data, error } = useSWR(`/pages/api/blog/readall`, fetcher, {
    refreshInterval: 30000, // 30秒ごとにポーリング
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateIfStale: true,
    dedupingInterval: 1000, // 重複リクエストを防ぐ間隔
  });

  if (error) return <div>エラーが発生しました。</div>;
  if (!data) return <div>データを取得中...</div>;

  const truncateText = (text, maxLength) => {
    if (typeof text !== "string") {
      console.error("truncateText received non-string input:", text);
      return "";
    }
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const sanitizeAndTruncateText = (text, maxLength) => {
    const sanitizedText = DOMPurify.sanitize(text, {
      ALLOWED_TAGS: ["p", "b", "i", "em", "strong", "a"],
      ALLOWED_ATTR: ["href", "target"],
    });
    const strippedText = sanitizedText.replace(/<[^>]*>/g, "");
    return truncateText(strippedText, maxLength);
  };

  return (
    <section
      className={`${styles.blog_section} ${isActive ? styles.active : ""}`}
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
                src={item.postImage}
                alt={item.postImageAlt}
              />
            </figure>
            <time dateTime={item.postDate} className={styles.blog_post_date}>
              {item.postDate}
            </time>
            <div className={styles.blog_post_text}>
              {sanitizeAndTruncateText(item.postMessage, 80)}
            </div>
            <div className={styles.blog_post_next}>
              <Link href={`/pages/blog/${item._id}`}>
                <span>&gt;</span>
                <span>続きを読む</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
