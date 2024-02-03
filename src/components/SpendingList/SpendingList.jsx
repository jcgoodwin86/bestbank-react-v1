import PropTypes from "prop-types";
import SpendingBar from "../SpendingBar/SpendingBar";
import styles from "./SpendingList.module.css";

export default function SpendingList({ accounts }) {
  let max = Math.max(
    ...accounts[0].spendings.map((cata) => {
      return parseInt(cata.spent);
    })
  );

  const categoryList = accounts[0].spendings.map((cata, index) => {
    let percent = (parseInt(cata.spent) / max) * 100;

    return (
      <SpendingBar
        key={index}
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
