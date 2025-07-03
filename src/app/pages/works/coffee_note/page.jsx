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
          <button className={styles.works_app_link_button} type="button">
            <span className={styles.works_app_link}>
              まだ,Google Storeには、アップロードしていません。
            </span>
          </button>
          {/* <button className={styles.works_app_link_button} type="button">
            <Link className={styles.works_app_link} href={`/`} passHref>
              『Coffee Note』のダウンロードはこちらからどうぞ！
            </Link>
          </button> */}

          <div className={styles.works_overview}>
            <h4 className={styles.works_overview_title}>概要</h4>
            <p className={styles.works_overview_text}>
              Coffee
              Noteは、「あなただけの完璧な一杯を見つける」ことをコンセプトに開発された、コーヒーレシピ記録・共有アプリです。日々のコーヒー体験をより深く、よりパーソナルなものにするために、レシピの検索、抽出ログの記録、そしてレシピの共有機能を統合しました。
            </p>
          </div>
          <div className={styles.works_features}>
            <h4 className={styles.works_features_title}>主な特徴</h4>
            <ul className={styles.works_features_list}>
              <li className={styles.works_features_item}>
                豊富なコーヒーレシピの検索・保存機能:
                世界中の多種多様なコーヒーレシピを網羅し、ユーザーは好みに合わせて簡単に検索・保存できます。これにより、マンネリ化しがちな毎日のコーヒータイムに新たな発見と楽しみを提供します。
              </li>
              <li className={styles.works_features_item}>
                詳細な抽出ログ機能:
                豆の種類、挽き具合、抽出方法、時間、豆の量、お湯の温度など、コーヒーを淹れる際の詳細な情報を記録できます。過去のログを振り返ることで、理想の味を再現したり、味の改善点を特定したりと、PDCAサイクルを回しながら自分のベストな一杯を追求できます。
              </li>
              <li className={styles.works_features_item}>
                レシピのPDF出力・共有機能:
                記録したオリジナルレシピや、お気に入りのレシピをPDF形式で出力し、手軽に友人や家族、SNSで共有できます。これにより、コーヒーを通じたコミュニケーションを促進し、新たなコーヒーコミュニティ形成の一助となります。
              </li>
            </ul>
          </div>
          <div className={styles.works_techUsed}>
            <h4 className={styles.works_techUsed_title}>使用技術</h4>
            <ul className={styles.works_techUsed_list}>
              <li className={styles.works_techUsed_item}>言語: TypeScript</li>
              <li className={styles.works_techUsed_item}>
                フレームワーク: React Native (Expo)
              </li>
              <li className={styles.works_techUsed_item}>
                バックエンド: Firebase (Firestore, Authentication, Storage)
              </li>
              <li className={styles.works_techUsed_item}>
                デザインツール: Figma
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
                    私自身がコーヒー愛好家であり、日々のコーヒー抽出の記録を手軽に行いたい、そしていつか自分のオリジナルレシピを共有したいという思いから、本アプリの開発に着手しました。
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    特にこだわったのは、抽出ログで豆の種類、挽き具合、抽出方法、温度など、私がこだわって記録したかった項目を詳細に設定できるようにした点です。また、作成したレシピやログをPDFで出力・共有できる機能は、より深くコーヒー体験を楽しむための重要な要素だと考えて実装しました。
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    UI/UXデザインでは、ユーザーが直感的に操作できるようFigmaを用いて徹底的にユーザーテストを繰り返し、シンプルな操作性と視覚的な魅力を両立させることに注力しました。
                  </li>
                </ul>
              </li>
              <li className={styles.works_devProcess_item}>
                <span className={styles.itemTitle}>今後の展望</span>
                <ul className={styles.works_devProcess_item_list}>
                  <li className={styles.works_devProcess_item_list_item}>
                    Coffee
                    Noteは、今後も皆様にとってより価値のあるアプリとなるよう、継続的に改善を行っていく予定です。具体的な機能追加は未定ですが、例えば新しいレシピの追加、コーヒー豆の管理機能の拡充などを検討し、よりパーソナルなコーヒー体験を提供できるよう努めてまいります。
                  </li>
                  <li className={styles.works_devProcess_item_list_item}>
                    将来的には、ユーザー同士が自由にレシピを共有したり、交流できるようなコミュニティ機能についても、可能性を探っていきたいと考えています。常に新しい技術やユーザーニーズに目を向け、アプリの進化に取り組んでいきます。
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
