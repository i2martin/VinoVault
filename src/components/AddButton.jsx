/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./AddButton.module.css";
function AddButton({ onClick }) {
  return (
    <div onClick={onClick} className={styles.container}>
      <span className={styles.icon}>➕</span>
    </div>
  );
}

export default AddButton;
