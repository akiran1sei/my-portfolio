import styles from "@/styles/page.module.css";
import { UpButton } from "@/components/Buttons/UpButton";
import { BlogSection } from "@/components/Section/BlogSection";

const Blog = () => {
  return (
    <div className={styles.contents}>
      <UpButton />
      <BlogSection />
    </div>
  );
};

export default Blog;
