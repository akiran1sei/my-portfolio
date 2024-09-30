// dashboard/layout.js

import { ClerkProvider } from "@clerk/nextjs";
import styles from "@/styles/page.module.css";
import "normalize.css";

export default function PagesLayout({ children }) {
  return (
    <ClerkProvider>
      <div className={styles.contents}>{children}</div>
    </ClerkProvider>
  );
}
