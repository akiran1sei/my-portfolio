import styles from "@/styles/page.module.css";
import { BackButton } from "@/components/Buttons/BackButton";
import { SocialButton } from "@/components/Buttons/SocialButton";
import { SubmitButton } from "@/components/Buttons/SubmitButton";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.contents}>
      <section className={styles.about_section}>
        <h2 className={styles.page_title}>About</h2>
        <div className={styles.about_image}>
          <Image
            src="/images/mt-huji.svg"
            alt="富士登頂した時の写真"
            width={150}
            height={150}
            priority
          />
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
                フロントエンド開発
                <ul>
                  <li>HTML/CSS/JavaScript（最も長い学習期間）</li>
                  <li>Next.js (AppRouter含む)</li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                バックエンド/データベース
                <ul>
                  <li>MongoDB Atlas</li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                バージョン管理
                <ul>
                  <li>GitHub</li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                デザインツール
                <ul>
                  <li>Figma（基本的なデザイン作成）</li>
                  <li>Adobe XD（基本操作）</li>
                </ul>
              </li>
              <li className={styles.about_skill_item}>
                その他の技術（基礎レベル）
                <ul>
                  <li>Ruby/Ruby on Rails（サンプルアプリ作成経験）</li>
                  <li>PHP（WordPress使用経験）</li>
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
                <br /> 退院後:諦めていたプログラマーを目指すべく一念発起。
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
      {/* <SocialButton />
      <SubmitButton />
      <BackButton /> */}
    </div>
  );
};
export default About;
