import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.brand}>
      <img src="/logo.png" alt="VinoVault logo" className={styles.logo} />
      <span className={styles.brandName}>VinoVault</span>
    </div>
  );
}

export default Logo;
