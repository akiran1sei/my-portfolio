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
                href={"/pages/about"}
                passHref
              >
                About
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"/pages/works"}
                passHref
              >
                Works
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"/pages/blog"}
                passHref
              >
                Blog
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"/pages/contact"}
                passHref
              >
                Contact
              </Link>
            </li>
            {/* <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"/pages/preview"}
                
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
