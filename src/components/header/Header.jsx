import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <img className={styles.logo} src="img/logo.svg" alt="best bank logo" />
        <h1 className={styles.title}>Best Bank</h1>
      </div>
      <div className={styles["menu-list"]}>
        <a
          className={`${styles.buttonLikeLink} ${styles.activeButton}`}
          href="/"
        >
          Home
        </a>

        <a className={styles.buttonLikeLink} href="#">
          Payments
        </a>

        <a className={styles.buttonLikeLink} href="#">
          Savings
        </a>

        <a className={styles.buttonLikeLink} href="#">
          Financing
        </a>

        <a className={styles.buttonLikeLink} href="#">
          Stocks
        </a>
      </div>
    </header>
  );
}
