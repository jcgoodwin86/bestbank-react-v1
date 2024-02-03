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
