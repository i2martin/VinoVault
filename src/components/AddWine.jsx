import Button from "./Button";
import styles from "./AddWine.module.css";
import { useNavigate } from "react-router-dom";
function AddWine() {
  const navigate = useNavigate();
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="name">Wine name</label>
          <input type="text" id="name" required />
        </div>
        <div className={styles.row}>
          <label htmlFor="year">Year</label>
          <input type="text" id="year" required />
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
          <label htmlFor="total">Total bottles</label>
          <input type="text" id="total" required />
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
              Object.assign(data, { cardType: "wine" });
              Object.assign(data, { sold: 0 });
              fetch("http://localhost:8000/wines", {
                method: "POST",
                body: JSON.stringify(data),
              });
              navigate("../wines");
            }}
          >
            Add
          </Button>
        </div>
      </form>
    </main>
  );
}

export default AddWine;
