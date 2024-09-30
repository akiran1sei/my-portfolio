"use client";
import { useState, useEffect } from "react";
import { SignIn, SignInButton } from "@clerk/nextjs";
import styles from "@/styles/page.module.css";
import { useRouter } from "next/navigation";

import {
  useSignIn,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

const Sign_In = () => {
  const { signIn, isLoaded } = useSignIn();
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsActive(true);
  }, []);
  if (!isLoaded) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ここでサインインロジックを実装
  };

  return (
    <section
      className={`${styles.post_section} ${isActive ? styles.active : ""}`}
    >
      {/* <form onSubmit={handleSubmit}>カスタムフォーム要素</form> */}
      <SignIn
        routing="path"
        path="/pages/dashboard/sign-in"
        forceRedirectUrl="http://localhost:3000/pages/dashboard/post"
      />
    </section>
  );
};
export default Sign_In;
