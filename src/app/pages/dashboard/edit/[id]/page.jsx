"use client";
import React, { useState, useEffect } from "react";
import { UpButton } from "@/components/Buttons/UpButton";
import { BackButton } from "@/components/Buttons/BackButton";
import Image from "next/image";
import useSWR from "swr";

import styles from "@/styles/page.module.css";
import DOMPurify from "dompurify";
import { DashboardHeader } from "@/components/Header/DashboardHeader";
import { SignedIn, SignedOut } from "@clerk/nextjs";
const fetcher = (url) => fetch(url).then((res) => res.json());
const PostDraft = ({ params }) => {
  const [isActive, setIsActive] = useState(false);
  const resolvedParams = React.use(params);
  const postId = resolvedParams.id;

  const { data, error } = useSWR(`/pages/api/draft/${postId}`, fetcher, {
    initial: true,
    onBackgroundUpdate: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
  });

  useEffect(() => {
    setIsActive(true);
  }, []);
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
    <>
      <DashboardHeader />

      <SignedIn>
        <UpButton />
        <section
          className={`${styles.draft_article_section} ${
            isActive ? styles.active : ""
          }`}
        >
          <h2 className={styles.page_title}>Draft Article</h2>
          <div className={styles.draft_article_contents}>
            <article className={styles.draft_article_post}>
              <h2 className={styles.draft_article_post_title}>
                {blogItem.postTitle}
              </h2>

              <time
                dateTime="2024-04-01"
                className={styles.draft_article_post_date}
              >
                {blogItem.postDate}
              </time>
              <div className={styles.draft_article_post_text}>
                <div
                  dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                  className={styles.draft_article_htmlEditor}
                />
              </div>
            </article>
            <div className={styles.draft_article_button}>
              <BackButton />
            </div>
          </div>
        </section>
      </SignedIn>
      <SignedOut>
        <p className={styles.signOut_text}>サインインしてください。</p>
      </SignedOut>
    </>
  );
};
export default PostDraft;
