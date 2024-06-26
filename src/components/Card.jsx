/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

//open weather data https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function Card({ props, onClick }) {
  if (props.cardType === "vineyard") {
    return (
      <div className={styles.card}>
        <img className={styles.imgTop} src="/vineyard.webp" alt="Vineyard" />
        <div className={styles.container}>
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>Location:</p>
          <div className={styles.spaceBetween}>
            <div>Lat: {Math.round(props.locationLatitude, 3)}</div>
            <div>Lng: {Math.round(props.locationLongitude, 3)}</div>
          </div>
          <p>{props.size} ha</p>
          <p></p>
        </div>
      </div>
    );
  }
  if (props.cardType === "storage") {
    return (
      <div className={styles.card}>
        <img
          className={styles.imgTop}
          style={{ backgroundColor: "white" }}
          src="/inox-tank.webp"
          alt="Vineyard"
        />
        <div className={styles.container}>
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>Capacity: {props.capacity} L</p>
          <p>Alcohol: {props.alcohol}%</p>
          <p>Acid: {props.acid} g/L</p>
          <p>Free sulphur: {props.freeSulphur} mg/L</p>
        </div>
      </div>
    );
  }
  if (props.cardType === "wine") {
    return (
      <div className={styles[props.wineType]} onClick={onClick}>
        <img
          className={styles.imgTop}
          src={
            props.wineType === "white"
              ? "/universal-bottle-white.webp"
              : props.wineType === "red"
              ? "/universal-bottle-red.webp"
              : "/universal-bottle-rose.webp"
          }
          alt={props.wineType}
        />
        <div className={styles.container}>
          <h4>
            <b>
              {props.name}
              {props.year}
            </b>
          </h4>
          <p>Alcohol: {props.alcohol}%</p>
          <p>Acid: {props.acid} g/L</p>
          <p>Free sulphur: {props.freeSulphur} mg/L</p>
          <p>Price: 2€</p>
        </div>
      </div>
    );
  }
}

export default Card;
