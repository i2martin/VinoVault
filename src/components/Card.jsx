import styles from "./Card.module.css";

//open weather data https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// eslint-disable-next-line react/prop-types
function Card({ cardType, wineType = "cardWine" }) {
  if (cardType === "vineyard") {
    return (
      <div className={styles.card}>
        <img className={styles.imgTop} src="/vineyard.webp" alt="Vineyard" />
        <div className={styles.container}>
          <h4>
            <b>Title</b>
          </h4>
          <p>Location:</p>
          <div className={styles.spaceBetween}>
            <div>Lat: 50</div>
            <div>Lng: 50</div>
          </div>
          <p>Size: 20ha</p>
          <p>Vines: Graševina, Chardonnay, Pino Bijeli</p>
        </div>
      </div>
    );
  }
  if (cardType === "wineCellar") {
    return (
      <div className={styles.card}>
        <img className={styles.imgTop} src="/wine_cellar.webp" alt="Vineyard" />
        <div className={styles.container}>
          <h4>
            <b>Title</b>
          </h4>
          <p>Location:</p>
          <div className={styles.spaceBetween}>
            <div>Lat: 50</div>
            <div>Lng: 50</div>
          </div>
          <p>Capacity: 100000 L</p>
        </div>
      </div>
    );
  }
  if (cardType === "wine") {
    return (
      <div className={styles[wineType]}>
        <img className={styles.imgTop} src="/chardonnay.jpg" alt="Chardonnay" />
        <div className={styles.container}>
          <h4>
            <b>Chardonnay 2024</b>
          </h4>
          <p>Location: X</p>
          <p>Alcohol: 11%</p>
          <p>Price: 2€</p>
        </div>
      </div>
    );
  }
}

export default Card;
