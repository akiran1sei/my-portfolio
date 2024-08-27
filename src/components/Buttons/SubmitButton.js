import styles from "@/styles/page.module.css";
export function SubmitButton() {
  return (
    <button type="submit" className={styles.submitButton}>
      送信
    </button>
  );
}
