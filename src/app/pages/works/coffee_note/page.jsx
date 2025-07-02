"use client";
import styles from "@/styles/page.module.css";

import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Link from "next/link";

const CoffeeNoteContents = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // ページ読み込み時に実行される処理
    setIsActive(true);
  }, []); // 空の配列を渡すことで、マウント時に一度だけ実行される
  return (
    <div className={styles.contents}>
      <UpButton />

      <section
        className={`${styles.works_section} ${isActive ? styles.active : " "}`}
      >
        <h2 className={styles.page_title}>
          Works <br />
          <Link href={`https://tastingnote.vercel.app/`} passHref>
            『Coffee Note』
          </Link>
        </h2>
        <div className={styles.works_scroll}>
          <div
            className={`${styles.works_scroll_image} ${styles.coffee_note_img_1} ${styles.works_sp}`}
          ></div>
          <div
            className={`${styles.works_scroll_image} ${styles.coffee_note_img_2} ${styles.works_sp}`}
          ></div>
          <div
            className={`${styles.works_scroll_image} ${styles.coffee_note_img_3} ${styles.works_sp}`}
          ></div>
        </div>

        <div className={styles.works_text}>
          <h3 className={styles.works_app_title}>
            コーヒーアプリ『Coffee Note』
          </h3>
          {/* <button className={styles.works_app_link_button} type="button">
            <Link
              className={styles.works_app_link}
              href={`/`}
              passHref
            >
              『Coffee Note』のダウンロードはこちらからどうぞ！
            </Link>
          </button> */}

          <div className={styles.works_overview}>
            <h4 className={styles.works_overview_title}>概要</h4>
            <p className={styles.works_overview_text}>サンプルテキスト </p>
          </div>
          <div className={styles.works_features}>
            <h4 className={styles.works_features_title}>主な特徴</h4>
            <ul className={styles.works_features_list}>
              <li className={styles.works_features_item}>サンプルテキスト </li>
              <li className={styles.works_features_item}>サンプルテキスト </li>
              <li className={styles.works_features_item}>サンプルテキスト </li>
            </ul>
          </div>
          <div className={styles.works_techUsed}>
            <h4 className={styles.works_techUsed_title}>使用技術</h4>
            <ul className={styles.works_techUsed_list}>
              <li className={styles.works_techUsed_item}>
                フロントエンド: サンプルテキスト
              </li>
              <li className={styles.works_techUsed_item}>
                バックエンド:サンプルテキスト
              </li>
              <li className={styles.works_techUsed_item}>
                フレームワーク: サンプルテキスト
              </li>
              <li className={styles.works_techUsed_item}>
                データベース: サンプルテキスト
              </li>
              <li className={styles.works_techUsed_item}>
                デプロイ: サンプルテキスト
              </li>
            </ul>
          </div>
          <div className={styles.works_devProcess}>
            <h4 className={styles.works_devProcess_title}>開発プロセス</h4>
            <ul className={styles.works_devProcess_list}>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>企画・設計</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>開発1</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>開発2</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>開発3</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>開発4</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>開発5</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>開発6</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    サンプルテキスト
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CoffeeNoteContents;
