import styles from "./AppContent.module.css";
import { Outlet } from "react-router-dom";
function AppContent() {
  return (
    <div className={styles.appContainer}>
      <Outlet />
    </div>
  );
}

export default AppContent;
