import styles from "./AddStorage.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const inputs = [
  "name",
  "alcohol",
  "acid",
  "freeSulphur",
  "capacity",
  "filled",
  "sort",
];
const placeholders = [
  "Storage name",
  "Alcohol",
  "Acid",
  "FreeSulphur",
  "Capacity",
  "Filled amount",
  "Vine sorts",
];

function AddStorage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <main className={styles.login}>
      <form
        onSubmit={handleSubmit((data) => {
          Object.assign(data, { cardType: "storage" });
          Object.assign(data, { sold: 0 });
          console.log(JSON.stringify(data));
          fetch("http://localhost:8000/storage", {
            method: "POST",
            body: JSON.stringify(data),
          });
          navigate("../wine_storage");
        })}
        className={styles.form}
      >
        {inputs.map((input, id) => (
          <div className={styles.row} key={id}>
            <input
              {...register(input, {
                required: true,
                minLength: 1,
                maxLength: 30,
              })}
              aria-invalid={errors[input] ? "true" : "false"}
              placeholder={placeholders[id]}
            />
            {errors[input] && errors[input].type === "required" && (
              <span className="alert" role="alert">
                This is required*
              </span>
            )}
            {errors[input] && errors[input].type === "maxLength" && (
              <span className="alert" role="alert">
                Max length exceeded*
              </span>
            )}
          </div>
        ))}
        <div className={styles.row}>
          <label htmlFor="wineType">Type of wine</label>
          <select {...register("wineType", { required: true })} id="wineType">
            <option value="white">White</option>
            <option value="rose">Rose</option>
            <option value="red">Red</option>
          </select>
        </div>
        <input type="submit" value="Add" />
      </form>
    </main>
  );
}

export default AddStorage;
