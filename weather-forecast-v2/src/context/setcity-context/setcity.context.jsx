import { createContext, useState } from "react";

export const SetCityContext = createContext({
  latitude: "",
  setLatitude: () => null,
  longitude: "",
  setLongitude: () => {},
  weatherInfo: "",
  setWeatherInfo: () => {},
});

const SetCityContextsProvider = ({ children }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");

  const value = {
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    weatherInfo,
    setWeatherInfo,
  };

  return (
    <SetCityContext.Provider value={value}>{children}</SetCityContext.Provider>
  );
};

export default SetCityContextsProvider;
