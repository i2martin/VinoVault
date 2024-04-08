import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import Card from "./Card";
import styles from "./WineStorage.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function WineStorage() {
  const navigate = useNavigate();
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
      <AddButton onClick={() => navigate("../add_storage")} />
      <div className={styles.container}>
        {storage.map((st) => (
          <Card props={st} key={st.id} />
        ))}
      </div>
    </>
  );
}
export default WineStorage;
