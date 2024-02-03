// SpendingBar component is used to display the spending bar for each category in the SpendingList component.
// It takes two props: children and percent.
// The children prop is used to display the category name and the amount spent in each category.
// The percent prop is used to set the width of the bar.
import PropTypes from "prop-types";
import styles from "./SpendingBar.module.css";

export default function SpendingBar({ children, percent }) {
  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${percent}%` }}>
        {children}
      </div>
    </div>
  );
}

SpendingBar.propTypes = {
  children: PropTypes.node.isRequired,
  percent: PropTypes.number.isRequired,
};
