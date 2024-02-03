// SpendingList component is used to display the spending list for each account in the AccountList component.
// It's used in App.js to display the spending list for each account.
// It takes one prop: accounts.
import PropTypes from "prop-types";
import SpendingBar from "../SpendingBar/SpendingBar";
import styles from "./SpendingList.module.css";

export default function SpendingList({ accounts }) {
  // max is the maximum amount spent in any category
  let max = Math.max(
    ...accounts[0].spendings.map((cata) => {
      return parseInt(cata.spent);
    })
  );
  // categoryList generates a list of SpendingBar components
  const categoryList = accounts[0].spendings.map((cata, index) => {
    // percent is the percentage of the amount spent in each category
    let percent = (parseInt(cata.spent) / max) * 100;

    return (
      <SpendingBar
        key={index}
        // this will make the bar look better and clear to compare the spending
        percent={percent > 40 ? percent : (percent += 30)}
      >
        <span className={styles.barText}>{cata.category}</span>
        <span className={styles.barText}>${cata.spent}</span>
      </SpendingBar>
    );
  });

  return (
    <>
      <h2 className={styles.title}>Spending</h2>
      <div className={styles.barList}>{categoryList}</div>
    </>
  );
}

SpendingList.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      spendings: PropTypes.array.isRequired,
    })
  ).isRequired,
};
