import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button.jsx";
import AccountCard from "./components/AccountCard/AccountCard.jsx";
import SpendingList from "./components/SpendingList/SpendingList.jsx";
import accounts from "./data.js";
import styles from "./App.module.css";

export default function App() {
  // Map over the accounts and create an AccountCard for each account
  const accountList = accounts.map((account) => {
    return (
      <AccountCard
        key={account.id}
        title={account.title}
        balance={account.balance}
      />
    );
  });

  return (
    <>
      <Header />
      <main>
        <div className={[styles.buttonContainer, styles.diagonal].join(" ")}>
          <Button>Pay</Button>
          <Button>Transfer</Button>
        </div>
        <div className={styles.listContainer}>
          <section className={styles.accountList}>
            <h2>Accounts</h2>
            {accountList}
          </section>
          <section className={[styles.barList, styles.diagonal].join(" ")}>
            <SpendingList accounts={accounts} />
          </section>
        </div>
      </main>
    </>
  );
}
