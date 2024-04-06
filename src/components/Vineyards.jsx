import AddButton from "./AddButton";
import Card from "./Card";
import styles from "./Vineyards.module.css"
function Vineyard() {
  return (
    <>
      <AddButton />
      <div className={styles.container}>
        <Card cardType="vineyard" />
        <Card cardType="vineyard" />
        <Card cardType="vineyard" />
        <Card cardType="vineyard" />
        <Card cardType="vineyard" />
        <Card cardType="vineyard" />
      </div>
    </>
  );
}
export default Vineyard;
