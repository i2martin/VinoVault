import { useEffect, useState } from "react";
import AddButton from "./AddButton";
import Card from "./Card";
import styles from "./Vineyards.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
function Vineyard() {
  const [vineyards, setVineyards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(function () {
    setError(false);
    async function getWines() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/vineyards");
        const data = await res.json();
        setVineyards(data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getWines();
  }, []);
  if (isLoading) return <Spinner />;
  if (error) return <Message />;
  return (
    <>
      <AddButton />
      <div className={styles.container}>
        {vineyards.map((vineyard) => (
          <Card props={vineyard} key={vineyard.id} />
        ))}
      </div>
    </>
  );
}
export default Vineyard;
