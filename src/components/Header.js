import Link from "next/link";
import styles from "../styles/page.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <nav className={styles.header_nav}>
          <ul className={styles.header_nav_list}>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/about"}
                scroll={false}
                passHref
              >
                About
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/works"}
                scroll={false}
                passHref
              >
                Works
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/blog"}
                scroll={false}
                passHref
              >
                Blog
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/contact"}
                scroll={false}
                passHref
              >
                Contact
              </Link>
            </li>
            {/* <li className={styles.header_nav_item}>
              <Link
                className={styles.header_nav_link}
                href={"http://localhost:3000/pages/preview"}
                scroll={false}
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
};
export default Header;
