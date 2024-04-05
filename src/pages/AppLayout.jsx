import Sidebar from "../components/Sidebar";
import AppContent from "../components/AppContent";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <AppContent />
    </div>
  );
}

export default AppLayout;
