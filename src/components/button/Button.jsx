import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
