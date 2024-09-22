"use client";
import styles from "@/styles/page.module.css";
import useSWR from "swr";
import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BackButton } from "@/components/Buttons/BackButton";
import DOMPurify from "dompurify";

const Article = (request) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const { data, error } = useSWR(
    `/pages/api/blog/${request.params.id}`,
    fetcher,
    {
      initial: true,
      onBackgroundUpdate: true,
      revalidateOnMount: true,
      revalidateOnReconnect: true,
    }
  );

  if (error) return <div>エラーが発生しました。</div>;
  if (!data) return <div>データを取得中</div>;
  const blogItem = data.value;

  const dirtyHtml = blogItem.postMessage;
  const sanitizedHtml = DOMPurify.sanitize(dirtyHtml, {
    ALLOWED_TAGS: [
      "p",
      "b",
      "i",
      "a",
      "img",
      "ul",
      "ol",
      "li",
      "blockquote",
      "figure",
      "figcaption",
      "code",
      "pre",
    ],
    ALLOWED_ATTR: {
      "*": ["class", "style"],
      a: ["href", "target"],
      img: ["src", "alt", "width", "height"],
      code: ["class"],
      pre: ["class"],
    },
    ALLOWED_URI_REGEXP:
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|xxx):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    FORBID_ATTR: ["onclick", "onload"],
    ALLOW_DATA_ATTRS: false,
    USE_PROFILES: { html: true },
  });

  return (
    <div className={styles.contents}>
      <UpButton />
      <section
        className={`${styles.article_section} ${isActive ? styles.active : ""}`}
      >
        <h2 className={styles.page_title}>Article</h2>
        <div className={styles.article_contents}>
          <article className={styles.article_post}>
            <h2 className={styles.article_post_title}>{blogItem.postTitle}</h2>

            <time dateTime="2024-04-01" className={styles.article_post_date}>
              {blogItem.postDate}
            </time>
            <div className={styles.article_post_text}>
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                className={styles.article_htmlEditor}
              />
            </div>
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
