// components/Header/DashboardHeader.js
import Link from "next/link";
import React from "react";
import styles from "@/styles/page.module.css";
import { SignedOut, SignOutButton } from "@clerk/nextjs";
import { SignedIn, SignIn, SignInButton } from "@clerk/clerk-react";

export function DashboardHeader() {
  return (
    <header className={styles.dashboard_header} id="dashboard_header">
      <div className={styles.dashboard_header_wrap}>
        <nav className={styles.dashboard_header_nav}>
          <ul className={styles.dashboard_header_nav_list}>
            <li className={styles.dashboard_header_nav_item}>
              <Link
                className={styles.dashboard_header_nav_link}
                href={"/pages/dashboard/post"}
                passHref
              >
                Post
              </Link>
            </li>
            <li className={styles.dashboard_header_nav_item}>
              <Link
                className={styles.dashboard_header_nav_link}
                href={`/pages/dashboard/edit`}
              >
                Post List
              </Link>
            </li>
            <li className={styles.dashboard_header_nav_item}>
              <Link
                className={styles.dashboard_header_nav_link}
                href={"/pages/dashboard/upload"}
                passHref
              >
                Upload
              </Link>
            </li>
            <li className={styles.dashboard_header_nav_item}>
              <SignedIn>
                <SignOutButton
                  redirectUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
                />
              </SignedIn>
              <SignedOut>
                <SignInButton
                  forceRedirectUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
                />
              </SignedOut>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
