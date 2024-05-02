import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { Graph, Database, Wine, MapTrifold, SignOut } from "phosphor-react";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink className={styles.navLink} to="vineyards">
          <Graph /> Vineyards
        </NavLink>
        <NavLink className={styles.navLink} to="wine_storage">
          <Database /> Wine storage
        </NavLink>
        <NavLink className={styles.navLink} to="map">
          <MapTrifold /> View on map
        </NavLink>
        <NavLink className={styles.navLink} to="wines">
          <Wine /> Wines
        </NavLink>
        <NavLink className={styles.navLink} to="/">
          <SignOut /> Log out
        </NavLink>
      </ul>
    </nav>
  );
}
export default AppNav;
