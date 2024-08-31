"use client";
import styles from "@/styles/page.module.css";
import { UpButton } from "@/components/Buttons/UpButton";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.contents}>
      <UpButton />
      <section className={styles.about_section}>
        <h2 className={styles.page_title}>About</h2>
        <div className={styles.about_image}></div>
        <div className={styles.socialMediaBox}>
          <button className={styles.socialMediaButton} type="button">
            <Image
              src="/images/X_logo-black.png"
              alt="Xの画像"
              width={25}
              height={25}
              priority
            />
          </button>
          <button className={styles.socialMediaButton} type="button">
            <Image
              src="/images/Instagram_Glyph_Gradient.png"
              alt="インスタグラムの画像"
              width={25}
              height={25}
              priority
            />
          </button>
          <button className={styles.socialMediaButton} type="button">
            <Image
              src="/images/Facebook_Logo_Primary.png"
              alt="フェイスブックの画像"
              width={25}
              height={25}
              priority
            />
          </button>
          {/* <button className={styles.socialBox_} type="button"></button> */}
        </div>
        <div className={styles.about_text}>
          <p className={styles.about_intro_text}>
            35歳からプログラミングやアプリ開発、アフィリエイト、ブログに挑戦しています。うつ病や不安障害と闘いながら、同じ悩みを持つ方々に少しでも勇気を与えたいと思っています。日々の出来事や精神疾患に関する悩みなどをブログで発信中です。ぜひご覧ください。
          </p>
          <div className={styles.about_skill_text}>
            <h3 className={styles.about_skill_title}>
              スキルリスト（習熟度順）
            </h3>
            <ul className={styles.about_skill_list}>
              <li className={styles.about_skill_item}>
                <span className={styles.itemTitle}>フロントエンド開発</span>
                <ul className={styles.about_skill_item_list}>
                  <li className={styles.about_skill_item_list_item}>
                    HTML/CSS/JavaScript（最も長い学習期間）
                  </li>
                  <li className={styles.about_skill_item_list_item}>
                    Next.js (AppRouter含む)
                  </li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                <span className={styles.itemTitle}>
                  バックエンド/データベース
                </span>
                <ul className={styles.about_skill_item_list}>
                  <li className={styles.about_skill_item_list_item}>
                    MongoDB Atlas
                  </li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                <span className={styles.itemTitle}>バージョン管理</span>
                <ul className={styles.about_skill_item_list}>
                  <li className={styles.about_skill_item_list_item}>GitHub</li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                <span className={styles.itemTitle}>デザインツール</span>
                <ul className={styles.about_skill_item_list}>
                  <li className={styles.about_skill_item_list_item}>
                    Figma（基本的なデザイン作成）
                  </li>
                  <li className={styles.about_skill_item_list_item}>
                    Adobe XD（基本操作）
                  </li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                <span className={styles.itemTitle}>
                  その他の技術（基礎レベル）
                </span>
                <ul className={styles.about_skill_item_list}>
                  <li className={styles.about_skill_item_list_item}>
                    Ruby/Ruby on Rails（サンプルアプリ作成経験）
                  </li>
                  <li className={styles.about_skill_item_list_item}>
                    PHP（WordPress使用経験）
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.about_career_text}>
            <h3 className={styles.about_career_title}>経歴</h3>
            <ul className={styles.about_career_list}>
              <li className={styles.about_career_item}>
                高校卒業後:飲食店で1年、建設業で2年の計3年間アルバイト
              </li>
              <li className={styles.about_career_item}>
                3年後:自衛隊に入隊し、3年後に退職
              </li>
              <li className={styles.about_career_item}>
                その後:
                東京へ上京し、板前を目指すも環境や人間関係に悩み、職を転々とし、うつ病を発症
              </li>
              <li className={styles.about_career_item}>
                帰郷後: 地元に戻り、県内で工場勤務
              </li>
              <li className={styles.about_career_item}>
                工場勤務4年後:再びうつ病を発症し、1年間休職し引きこもり生活
              </li>
              <li className={styles.about_career_item}>
                その後: 3か月間精神病棟に入院し、価値観に変化を感じる
              </li>
              <li className={styles.about_career_item}>
                退院後:諦めていたプログラマーを目指すべく一念発起。
                <br />
                WEB制作会社などの仕事や障がい者就労継続支援A型・B型就労移行支援サービスを行う会社に就職
              </li>
              <li className={styles.about_career_item}>
                現在:精神障害と向き合いながら、ブログやアフィリエイトを学びつつ、アプリを制作中
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
