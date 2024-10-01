"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import { useRouter } from "next/navigation";

import { useSignIn, SignIn } from "@clerk/nextjs";

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

  return (
    <section
      className={`${styles.signIn_section} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.signIn_card}>
        <SignIn
          appearance={{
            elements: {
              cardBox: { width: "100%" },
              card: {
                width: "100%",
                minWidth: "270px",
                maxWidth: "500px",
              },
              headerTitle: {
                fontSize: "18px",
                fontWeight: "bold",
              },
              headerSubtitle: {
                fontSize: "18px",
                fontWeight: "bold",
              },
              formFieldLabel: {
                fontSize: "18px",
                fontWeight: "bold",
              },
              formFieldInput: {
                fontSize: "18px",
                maxWidth: "500px",
              },
              formButtonPrimary: {
                fontSize: "18px",
              },
              socialButtonsBlockButton: {
                fontSize: "18px",
              },
              socialButtonsBlockButtonText: {
                fontSize: "18px",
              },
            },
          }}
          routing="path"
          path="/pages/dashboard/sign-in"
          forceRedirectUrl="/pages/dashboard/post"
        />
      </div>
    </section>
  );
};
export default Sign_In;
