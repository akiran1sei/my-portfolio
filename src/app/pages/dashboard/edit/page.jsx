"use client";
// ❌ 使っていない useEffect を削除しました
import { useState } from "react";

import styles from "@/styles/page.module.css";
import { DashboardHeader } from "@/components/Header/DashboardHeader";
import { Show } from "@clerk/nextjs";
import { BlogSection } from "@/components/Section/BlogSection";
import { UpButton } from "@/components/Buttons/UpButton";

const PostDraft = () => {
  const [error, setError] = useState("");

  return (
    <>
      <DashboardHeader />
      <Show when="signed-in">
        <UpButton />
        <BlogSection />
        {error && <p className={styles.error_message}>{error}</p>}
      </Show>

      <Show when="signed-out">
        <p className={styles.signOut_text}>サインインしてください。</p>
      </Show>
    </>
  );
};

export default PostDraft;
