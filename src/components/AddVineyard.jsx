import styles from "./AddVineyard.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const inputs = [
  "name",
  "size",
  "locationLatitude",
  "locationLongitude",
  "sorts",
];
const placeholders = [
  "Vineyard name",
  "Size",
  "Latitude",
  "Longitude",
  "Vine sorts",
];
function AddVineyard() {
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
          Object.assign(data, { cardType: "vineyard" });
          console.log(JSON.stringify(data));
          fetch("http://localhost:8000/vineyards", {
            method: "POST",
            body: JSON.stringify(data),
          });
          navigate("../vineyards");
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
        <input type="submit" value="Add" />
      </form>
    </main>
  );
}

export default AddVineyard;
