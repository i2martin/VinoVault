import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { Graph, Database, Wine, MapTrifold } from "phosphor-react";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink className={styles.navLink} to="vineyards">
          <Graph /> Vineyards
        </NavLink>
        <NavLink className={styles.navLink} to="wine_cellar">
          <Database /> Wine cellar
        </NavLink>
        <NavLink className={styles.navLink} to="map">
          <MapTrifold /> View on map
        </NavLink>
        <NavLink className={styles.navLink} to="wines">
          <Wine /> Wines
        </NavLink>
      </ul>
    </nav>
  );
}
export default AppNav;
