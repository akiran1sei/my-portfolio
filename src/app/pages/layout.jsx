export const metadata = {
  title: "Nakamori Akiraのポートフォリオサイト",
  description: "中森 章のポートフォリオです。",
};

import { Header } from "@/components/Header/Header";
import styles from "@/styles/page.module.css";
import "normalize.css";
export default function PagesLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_wrap}>{children}</div>
      </main>
    </div>
  );
}
