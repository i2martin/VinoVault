/* eslint-disable react/prop-types */
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import Spinner from "./Spinner";
import Message from "./Message";

function Map() {
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
  const [mapPosition, setMapPosition] = useState([40, 40]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(
    function () {
      if (geolocationPosition) {
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
      }
    },
    [geolocationPosition]
  );
  if (isLoading) return <Spinner />;
  if (error) return <Message />;

  return (
    <div className={styles.mapContainer}>
      {geolocationPosition === null && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vineyards !== null
          ? vineyards.map((vineyard) => (
              <Marker
                position={[
                  vineyard.locationLatitude,
                  vineyard.locationLongitude,
                ]}
                key={vineyard.id}
              >
                <Popup>
                  <p>{vineyard.name}</p>
                </Popup>
              </Marker>
            ))
          : null}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
