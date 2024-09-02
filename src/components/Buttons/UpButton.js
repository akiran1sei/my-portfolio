import styles from "@/styles/page.module.css";
import Link from "next/link";
export function UpButton() {
  return (
    <button className={styles.upButton} type="button">
      <Link href="#header" passHref>
        ▲
      </Link>
    </button>
  );
}
