"use client";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  // const [Action, setAction] = useState(false);
  // const handleClickAction = () => {
  //   setAction(!Action);
  // };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_wrapper}>
          <div className={styles.home_contents}>
            <div className={styles.home_notebook}>
              <div className={styles.home_notebook_spine}></div>
              <div className={styles.home_notebook_cover}>
                <h1 className={styles.portfolio_name}>
                  <span className={`${styles.border_bottom} ${styles.home}`}>
                    Portfolio
                  </span>
                </h1>
                <p className={styles.my_name}>
                  <span className={`${styles.border_bottom} ${styles.home}`}>
                    Akira Nakamori
                  </span>
                </p>
                <div className={styles.home_button}>
                  <button
                    // onClick={handleClickAction}
                    className={styles.startButton}
                    type="button"
                  >
                    <span className={styles.startArrow}>
                      <Image
                        src="/images/south_east_arrow.svg"
                        alt="矢印の画像"
                        width={50}
                        height={50}
                        priority
                      />
                    </span>
                    <Link
                      href={"http://localhost:3000/pages/about"}
                      scroll={false}
                      passHref
                    >
                      <span className={styles.startCircle}></span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            {/* {Action && (
              <div className={styles.home_index}>
                <h2 className={styles.home_index_title}>目次</h2>
                <nav className={styles.home_index_nav}>
                  <ul className={styles.home_index_list}>
                    <li className={styles.home_index_item}>
                      <Link
                        href={"http://localhost:3000/pages/about"}
                        scroll={false}
                        passHref
                      >
                        About
                      </Link>
                    </li>
                    <li className={styles.home_index_item}>
                      <Link
                        href={"http://localhost:3000/pages/works"}
                        scroll={false}
                        passHref
                      >
                        Works
                      </Link>
                    </li>
                    <li className={styles.home_index_item}>
                      <Link
                        href={"http://localhost:3000/pages/blog"}
                        scroll={false}
                        passHref
                      >
                        Blog
                      </Link>
                    </li>
                    <li className={styles.home_index_item}>
                      <Link
                        href={"http://localhost:3000/pages/contact"}
                        scroll={false}
                        passHref
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )} */}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
