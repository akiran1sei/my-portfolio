import { DashboardHeader } from "@/components/DachboardHeader";

import styles from "@/styles/page.module.css";
import "normalize.css";
export default function PagesLayout({ children }) {
  return (
    <div className={styles.contents}>
      <DashboardHeader />
      {children}
    </div>
  );
}
