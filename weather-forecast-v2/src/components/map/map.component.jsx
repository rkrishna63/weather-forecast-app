import mapboxgl from "mapbox-gl";
import { SetCityContext } from "../../context/setcity-context/setcity.context";
import { useRef, useEffect, useContext } from "react";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3ViYXNoMTEiLCJhIjoiY2wyMWc0cmRqMGptdTNqbW1seHp1OXpxdCJ9.mYw90uvW9IHOKSxq9_4jZA";

const Map = () => {
  const { latitude, longitude } = useContext(SetCityContext);
  const map = useRef(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    //if latitude and longitude changes the map shows the respected
    //city/address according to coordinates
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 10,
    });

    //if there is no latitude and longitude this will run and set default
    //city to Seattle
    !latitude &&
      (map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.3, 47.6],
        zoom: 10,
      }));
  }, [latitude, longitude]);
  return (
    <div>
      {/*this will render the map on Ui */}
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
