// components/Header/DashboardHeader.js
import Link from "next/link";
import React from "react";
import styles from "@/styles/page.module.css";
// 1. clerk-react を削除し、nextjs から Show と各種ボタンをインポート
import { Show, SignOutButton, SignInButton } from "@clerk/nextjs";

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
              {/* 2. SignedIn を Show when="signed-in" に変更 */}
              <Show when="signed-in">
                <SignOutButton
                  redirectUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
                />
              </Show>
              {/* 3. SignedOut を Show when="signed-out" に変更 */}
              <Show when="signed-out">
                <SignInButton
                  forceRedirectUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
                />
              </Show>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
