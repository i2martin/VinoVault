/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import Spinner from "./Spinner";
import Message from "./Message";
import Card from "./Card";
import styles from "./Wines.module.css";
import { Outlet } from "react-router-dom";

function Wines() {
  const navigate = useNavigate();
  const [wines, setWines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(function () {
    setError(false);
    async function getWines() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/wines");
        const data = await res.json();
        setWines(data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getWines();
  }, []);
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <Message
        message={
          "There was an error accessing data! Did you forget to start the server(development mode)?"
        }
      />
    );
  return (
    <>
      <Outlet />
      <AddButton onClick={() => navigate("../add_wine")} />
      <div className={styles.container}>
        {wines.map((wine) => (
          <Card
            props={wine}
            key={wine.id}
            onClick={() => navigate(`./${wine.id}`)}
          />
        ))}
      </div>
    </>
  );
}
export default Wines;
