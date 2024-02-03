import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import AccountCard from "./components/AccountCard/AccountCard";
import SpendingList from "./components/SpendingList/SpendingList";
import accounts from "./data";
import styles from "./App.module.css";

export default function App() {
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
        <section className={styles.accountList}>
          <h2>Accounts</h2>
          {accountList}
        </section>
        <section className={styles.barList}>
          <SpendingList accounts={accounts} />
        </section>
      </main>
    </>
  );
}
