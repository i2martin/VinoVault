import AddButton from "./AddButton";
import Card from "./Card";
import styles from "./Wines.module.css"

function Wines() {
  return (
    <>
      <AddButton />
      <div className={styles.container}>
        <Card cardType="wine" />
        <Card cardType="wine" wineType="red" />
        <Card cardType="wine" />
        <Card cardType="wine" wineType="red" />
        <Card cardType="wine" wineType="rose" />
        <Card cardType="wine" />
      </div>
    </>
  );
}
export default Wines;
