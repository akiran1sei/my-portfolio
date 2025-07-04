"use client";
import styles from "@/styles/page.module.css";

import { UpButton } from "@/components/Buttons/UpButton";
import { useState, useEffect } from "react";
import Link from "next/link";

const TastingNoteContents = () => {
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
            『Tasting Note』
          </Link>
        </h2>
        <div className={styles.works_scroll}>
          <div
            className={`${styles.works_scroll_image} ${styles.tasting_note_img_1} ${styles.works_web}`}
          ></div>
          <div
            className={`${styles.works_scroll_image} ${styles.tasting_note_img_2} ${styles.works_web}`}
          ></div>
          <div
            className={`${styles.works_scroll_image} ${styles.tasting_note_img_3} ${styles.works_web}`}
          ></div>
        </div>

        <div className={styles.works_text}>
          <h3 className={styles.works_app_title}>
            コーヒーテイスティングアプリ『Tasting Note』
          </h3>
          <button className={styles.works_app_link_button} type="button">
            <Link
              className={styles.works_app_link}
              href={`https://tastingnote.vercel.app/`}
              passHref
            >
              『Tasting Note』は、こちらからどうぞ！
            </Link>
          </button>

          <div className={styles.works_overview}>
            <h4 className={styles.works_overview_title}>概要</h4>
            <p className={styles.works_overview_text}>
              「カップ・オブ・エクセレンス」という国際的なコーヒー品評会で使用されるシートを参考に作成したWebアプリです。ユーザーがコーヒーの味わいを詳細に記録し、自分好みのコーヒーを探求できるツールです
            </p>
          </div>
          <div className={styles.works_features}>
            <h4 className={styles.works_features_title}>主な特徴</h4>
            <ul className={styles.works_features_list}>
              <li className={styles.works_features_item}>
                コーヒーの味わいを詳細に記録
              </li>
              <li className={styles.works_features_item}>
                ユーザーの好みに合ったコーヒー探しをサポート
              </li>
              <li className={styles.works_features_item}>
                シンプルで使いやすいインターフェース
              </li>
            </ul>
          </div>
          <div className={styles.works_techUsed}>
            <h4 className={styles.works_techUsed_title}>使用技術</h4>
            <ul className={styles.works_techUsed_list}>
              <li className={styles.works_techUsed_item}>
                フロントエンド: HTML, CSS, JavaScript
              </li>
              <li className={styles.works_techUsed_item}>
                バックエンド: Node.js
              </li>
              <li className={styles.works_techUsed_item}>
                フレームワーク: Next.js (App Router使用)
              </li>
              <li className={styles.works_techUsed_item}>
                データベース: MongoDB Atlas
              </li>
              <li className={styles.works_techUsed_item}>デプロイ: Vercel</li>
            </ul>
          </div>
          <div className={styles.works_devProcess}>
            <h4 className={styles.works_devProcess_title}>開発プロセス</h4>
            <ul className={styles.works_devProcess_list}>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>企画・設計</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    初めてのアプリ開発としてコーヒー関連のテーマを選択
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>開発スタート</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    当初はHTML/CSS/JavaScriptのみで開発開始
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    将来的な拡張性を考慮し、段階的に高度な技術導入を計画
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>React導入</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    JavaScript習熟度向上に伴い、Reactライブラリの導入を決定
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>Next.jsへの移行</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    ReactベースのフレームワークであるNext.jsの採用
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    初めはPages Router機能でデモアプリを開発
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>App Routerへの切り替え</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    調査の結果、App Router機能の習得が有益と判断
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    Pages RouterからApp Routerへ移行
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>
                  データベース不具合の修正
                </span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    更新機能の不具合を発見し修正
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>
                  『Tasting Note』アプリの完成
                </span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    App Router機能を活用し、最終版のアプリを開発
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
export default TastingNoteContents;
