import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink className={styles.navLink} to="vineyards">
          Vineyards
        </NavLink>
        <NavLink className={styles.navLink} to="wine_cellars">
          Wine cellars
        </NavLink>
        <NavLink className={styles.navLink} to="map">
          View on map
        </NavLink>
        <NavLink className={styles.navLink} to="wines">
          Wines
        </NavLink>
      </ul>
      
    </nav>
  );
}
export default AppNav;
