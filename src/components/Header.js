import Link from "next/link";
import React from "react";
import styles from "@/styles/page.module.css";

export function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.header_wrapper}>
        <nav className={styles.header_nav}>
          <ul className={styles.header_nav_list}>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/about"}
                passHref
              >
                About
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/works"}
                passHref
              >
                Works
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/blog"}
                passHref
              >
                Blog
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/contact"}
                passHref
              >
                Contact
              </Link>
            </li>
            {/* <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/preview"}
                
                passHref
              >
                Preview
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
