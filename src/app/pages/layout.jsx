// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

import { Header } from "@/components/Header";
import styles from "@/styles/page.module.css";
import "normalize.css";
export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_wrapper}>{children}</div>
      </main>
    </>
  );
}
