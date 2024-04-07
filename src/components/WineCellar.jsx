import { useEffect, useState } from "react";
import AddButton from "./AddButton";
import Card from "./Card";
import styles from "./WineCellar.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function WineCellar() {
  const [storage, setStorage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(function () {
    setError(false);
    async function getWines() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/storage");
        const data = await res.json();
        setStorage(data);
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
        {storage.map((st) => (
          <Card props={st} key={st.id} />
        ))}
      </div>
    </>
  );
}
export default WineCellar;
