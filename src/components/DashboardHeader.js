import Link from "next/link";
import React from "react";
import styles from "@/styles/page.module.css";

export function DashboardHeader() {
  return (
    <header className={styles.dashboard_header} id="dashboard_header">
      <div className={styles.dashboard_header_wrapper}>
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
                href={"/pages/dashboard/edit"}
                passHref
              >
                Edit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
