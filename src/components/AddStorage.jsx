import Button from "./Button";
import styles from "./AddStorage.module.css";
import { useNavigate } from "react-router-dom";
function AddStorage() {
  const navigate = useNavigate();
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="alcohol">Alcohol</label>
          <input type="text" id="alcohol" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="acid">Acid</label>
          <input type="text" id="acid" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="freeSulphur">Free sulphur</label>
          <input type="text" id="freeSulphur" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="capacity">Capacity</label>
          <input type="text" id="capacity" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="filled">Filled amount</label>
          <input type="text" id="filled" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="sort">Wine sort</label>
          <input type="text" id="sort" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="wineType">Type of wine</label>
          <select name="wineType" id="wineType">
            <option value="white">White</option>
            <option value="rose">Rose</option>
            <option value="red">Red</option>
          </select>
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
              Object.assign(data, { cardType: "storage" });
              Object.assign(data, { sold: 0 });
              fetch("http://localhost:8000/storage", {
                method: "POST",
                body: JSON.stringify(data),
              });
              navigate("../wine_storage");
            }}
          >
            Add
          </Button>
        </div>
      </form>
    </main>
  );
}

export default AddStorage;
