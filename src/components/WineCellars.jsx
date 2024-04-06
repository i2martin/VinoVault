import AddButton from "./AddButton";
import Card from "./Card";
import styles from "./WineCellars.module.css";

function WineCellars() {
  return (
    <>
      <AddButton />
      <div className={styles.container}>
        <Card cardType="wineCellar" />
        <Card cardType="wineCellar" />
        <Card cardType="wineCellar" />
        <Card cardType="wineCellar" />
        <Card cardType="wineCellar" />
        <Card cardType="wineCellar" />
      </div>
    </>
  );
}
export default WineCellars;
