"use client";
import { useState, useEffect } from "react";

import styles from "@/styles/page.module.css";

import { DashboardHeader } from "@/components/Header/DashboardHeader";
// 1. SignedIn, SignedOut を削除し、Show をインポート
import { Show } from "@clerk/nextjs";
import { BlogSection } from "@/components/Section/BlogSection";
import { UpButton } from "@/components/Buttons/UpButton";

const PostDraft = () => {
  const [error, setError] = useState("");

  return (
    <>
      <DashboardHeader />
      {/* 2. SignedIn を Show when="signed-in" に書き換え */}
      <Show when="signed-in">
        <UpButton />
        <BlogSection />
        {error && <p className={styles.error_message}>{error}</p>}
      </Show>

      {/* 3. SignedOut を Show when="signed-out" に書き換え */}
      <Show when="signed-out">
        <p className={styles.signOut_text}>サインインしてください。</p>
      </Show>
    </>
  );
};
export default PostDraft;
