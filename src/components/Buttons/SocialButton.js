import Image from "next/image";
import styles from "../../styles/page.module.css";
export function SocialButton() {
  return (
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
  );
}
