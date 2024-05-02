import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpinnerFullPage from "./SpinnerFullPage";
import Message from "./Message";
import styles from "./Wine.module.css";
function Wine() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [wine, setWine] = useState({});
  const [notes, setNotes] = useState({});

  useEffect(function () {
    async function fetchWine() {
      try {
        setIsLoading(true);
        setError(false);
        const res = await fetch(`http://localhost:8000/wines/${id}`);
        const data = await res.json();
        setWine(data);
        setNotes(data.notes);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWine();
  }, []);
  if (isLoading) return <SpinnerFullPage />;
  if (error)
    return (
      <Message message="Error fetching data. Did you forget to start server (development mode)?" />
    );
  return (
    <div className={styles.wineContainer}>
      <h1>
        {wine.name}, {wine.year}
      </h1>
      {notes.length === 0 ? (
        <p>There are currently no notes</p>
      ) : (
        <h1>Notes coming soon...</h1>
      )}
    </div>
  );
}

export default Wine;
