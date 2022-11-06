import "bootstrap/dist/css/bootstrap.min.css";

import Map from "./components/map/map.component";
import SearchBox from "./components/search-box/search-box.component";
import WeatherAPI from "./API/weather-API/weather.api";
import WeatherData from "./components/weather-data/weather-data.component";

import { Fragment, useContext } from "react";
import { SetCityContext } from "./context/setcity-context/setcity.context";

function App() {
  const { weatherInfo, latitude } = useContext(SetCityContext);
  return (
    <Fragment>
      <div className="fs-3 text-center bg-dark p-2 text-dark bg-opacity-10">
        WEATHER FORECAST
      </div>
      <div className="d-flex flex-row bg-gradient bg-white p-2 text-dark bg-opacity-75">
        <div className="p-4 w-100">
          <Map />
        </div>
        <div className="p-4 w-100">
          <SearchBox />
          {latitude && <WeatherAPI />}
          {weatherInfo && <WeatherData />}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
