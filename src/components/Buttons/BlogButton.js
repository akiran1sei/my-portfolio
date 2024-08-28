import styles from "@/styles/page.module.css";
export function BlogButton() {
  return (
    <button className={styles.blogButton} type="button">
      <span className={styles.blogButton_bar}></span>
      <span className={styles.blogButton_bar}></span>
      <span className={styles.blogButton_bar}></span>
    </button>
  );
}
