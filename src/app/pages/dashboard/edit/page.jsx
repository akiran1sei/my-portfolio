"use client";
import { useState, useEffect } from "react";

import styles from "@/styles/page.module.css";

import { DashboardHeader } from "@/components/Header/DashboardHeader";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { BlogSection } from "@/components/Section/BlogSection";
import { UpButton } from "@/components/Buttons/UpButton";
const PostDraft = () => {
  const [error, setError] = useState("");

  return (
    <>
      <DashboardHeader />
      <SignedIn>
        <UpButton />
        <BlogSection />
        {error && <p className={styles.error_message}>{error}</p>}
      </SignedIn>
      <SignedOut>
        <p className={styles.signOut_text}>サインインしてください。</p>
      </SignedOut>
    </>
  );
};
export default PostDraft;
