"use client";
import styles from "@/styles/page.module.css";

import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // ページ読み込み時に実行される処理
    setIsActive(true);
  }, []); // 空の配列を渡すことで、マウント時に一度だけ実行される

  return (
    <div className={styles.contents}>
      <UpButton />

      <section
        className={`${styles.blog_section} ${isActive ? styles.active : " "}`}
      >
        <h2 className={styles.page_title}>Blog</h2>
        <div className={styles.blog_contents}>
          <article className={styles.blog_post}>
            <h2 className={styles.blog_post_title}>初めまして…</h2>
            <figure className={styles.blog_post_img}>
              <Image
                width={150}
                height={150}
                src={"/images/mt-huji-sp.svg"}
                alt="登山登頂時"
              />
              <figcaption>富士山登頂時</figcaption>
            </figure>
            <time dateTime="2024-04-01" className={styles.blog_post_date}>
              2024年4月1日
            </time>

            <p className={styles.blog_post_text}>
              うつ病・不安障害を抱えて、寛解にまで至った僕。今は、プログラミングやアフィリエイト・ブログと色々とチャレンジしています。３５才という歳からのチャレンジですが、塵も積もれば山となるの精神で、ちょっとずつ...
            </p>
            <div className={styles.blog_post_next}>
              <Link href={"/pages/blog"} passHref={false}>
                <span>&gt;</span>
                <span>続きを読む</span>
              </Link>
            </div>
          </article>
          <article className={styles.blog_post}>
            <h2 className={styles.blog_post_title}>初めまして…</h2>
            <figure className={styles.blog_post_img}>
              <Image
                width={100}
                height={100}
                src={"/images/mt-huji-sp.svg"}
                alt="登山登頂時"
              />
              <figcaption>富士山登頂時</figcaption>
            </figure>
            <time dateTime="2024-04-01" className={styles.blog_post_date}>
              2024年4月1日
            </time>

            <p className={styles.blog_post_text}>
              うつ病・不安障害を抱えて、寛解にまで至った僕。今は、プログラミングやアフィリエイト・ブログと色々とチャレンジしています。３５才という歳からのチャレンジですが、塵も積もれば山となるの精神で、ちょっとずつ...
            </p>
            <div className={styles.blog_post_next}>
              <Link href={"/pages/blog"} passHref={false}>
                <span>&gt;</span>
                <span>続きを読む</span>
              </Link>
            </div>
          </article>
          <article className={styles.blog_post}>
            <h2 className={styles.blog_post_title}>初めまして…</h2>
            <figure className={styles.blog_post_img}>
              <Image
                width={100}
                height={100}
                src={"/images/mt-huji-sp.svg"}
                alt="登山登頂時"
              />
              <figcaption>富士山登頂時</figcaption>
            </figure>
            <time dateTime="2024-04-01" className={styles.blog_post_date}>
              2024年4月1日
            </time>

            <p className={styles.blog_post_text}>
              うつ病・不安障害を抱えて、寛解にまで至った僕。今は、プログラミングやアフィリエイト・ブログと色々とチャレンジしています。３５才という歳からのチャレンジですが、塵も積もれば山となるの精神で、ちょっとずつ...
            </p>
            <div className={styles.blog_post_next}>
              <Link href={"/pages/blog"} passHref={false}>
                <span>&gt;</span>
                <span>続きを読む</span>
              </Link>
            </div>
          </article>
          <article className={styles.blog_post}>
            <h2 className={styles.blog_post_title}>初めまして…</h2>
            <figure className={styles.blog_post_img}>
              <Image
                width={100}
                height={100}
                src={"/images/mt-huji-sp.svg"}
                alt="登山登頂時"
              />
              <figcaption>富士山登頂時</figcaption>
            </figure>
            <time dateTime="2024-04-01" className={styles.blog_post_date}>
              2024年4月1日
            </time>

            <p className={styles.blog_post_text}>
              うつ病・不安障害を抱えて、寛解にまで至った僕。今は、プログラミングやアフィリエイト・ブログと色々とチャレンジしています。３５才という歳からのチャレンジですが、塵も積もれば山となるの精神で、ちょっとずつ...
            </p>
            <div className={styles.blog_post_next}>
              <Link href={"/pages/blog"} passHref={false}>
                <span>&gt;</span>
                <span>続きを読む</span>
              </Link>
            </div>
          </article>
          <article className={styles.blog_post}>
            <h2 className={styles.blog_post_title}>初めまして…</h2>
            <figure className={styles.blog_post_img}>
              <Image
                width={100}
                height={100}
                src={"/images/mt-huji-sp.svg"}
                alt="登山登頂時"
              />
              <figcaption>富士山登頂時</figcaption>
            </figure>
            <time dateTime="2024-04-01" className={styles.blog_post_date}>
              2024年4月1日
            </time>

            <p className={styles.blog_post_text}>
              うつ病・不安障害を抱えて、寛解にまで至った僕。今は、プログラミングやアフィリエイト・ブログと色々とチャレンジしています。３５才という歳からのチャレンジですが、塵も積もれば山となるの精神で、ちょっとずつ...
            </p>
            <div className={styles.blog_post_next}>
              <Link href={"/pages/blog"} passHref={false}>
                <span>&gt;</span>
                <span>続きを読む</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
export default Blog;
