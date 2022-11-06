import "./weather-data.styles.css";
import { useContext } from "react";
import { SetCityContext } from "../../context/setcity-context/setcity.context";

const WeatherData = () => {
  const { weatherInfo } = useContext(SetCityContext);
  const { name } = weatherInfo;
  const { temp, pressure, humidity } = weatherInfo.main;
  const [weatherDetails] = weatherInfo.weather;

  //For converting the first letter to Caps
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="weather-data-container">
      <div className="fs-2 my-2">{name}</div>
      <div style={{ fontSize: "50px" }}>
        {(temp - 273.15).toFixed(2)}{" "}
        {/*converted Kelvin to celsius set the decimal palces to 2 */}
        <span className="fs-5"> °C</span>
        <span className="fs-3 ms-4">
          {capitalizeFirstLetter(weatherDetails.description)}
        </span>
      </div>

      <div className="fs-4 mb-2">
        Pressure: {pressure} <span className="fs-5 ">hPa</span>
      </div>
      <div className="fs-4 ">
        Humidity: {humidity}
        <span className="fs-5 ">%</span>
      </div>
    </div>
  );
};

export default WeatherData;
