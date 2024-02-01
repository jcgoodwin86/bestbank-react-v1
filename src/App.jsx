/*
  Break Down of all components to build

  TODO Header
    TODO Nav
      TODO Links to pages
  TODO Main
    TODO Button to pay
    TODO Button to transfer
    TODO Accounts List
      TODO Main Account Card
      TODO Expenses Card
      TODO Savings Card
*/
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.buttonContainer}>
          <Button>Pay</Button>
          <Button>Transfer</Button>
        </div>
      </main>
    </>
  );
}
