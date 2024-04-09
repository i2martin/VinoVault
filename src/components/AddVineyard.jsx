import Button from "./Button";
import styles from "./AddVineyard.module.css";
import { useNavigate } from "react-router-dom";
function AddVineyard() {
  const navigate = useNavigate();
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="size">Size</label>
          <input type="text" id="size" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="locationLatitude">Latitude</label>
          <input type="text" id="locationLatitude" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="locationLongitude">Longitude</label>
          <input type="text" id="locationLongitude" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="sorts">Vine sorts</label>
          <input type="text" id="sorts" required />
        </div>
        <div>
          <Button
            type="primary"
            onClick={(e) => {
              e.preventDefault();
              const data = {};
              Array.from(e.target.form).map((inputField) => {
                Object.assign(data, { [inputField.id]: inputField.value });
              });
              Object.assign(data, { cardType: "vineyard" });
              Object.assign(data, { sold: 0 });
              fetch("http://localhost:8000/vineyards", {
                method: "POST",
                body: JSON.stringify(data),
              });
              navigate("../vineyards");
            }}
          >
            Add
          </Button>
        </div>
      </form>
    </main>
  );
}

export default AddVineyard;
