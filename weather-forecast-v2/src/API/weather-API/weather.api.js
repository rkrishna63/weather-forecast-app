import { useContext, useEffect } from "react";
import { SetCityContext } from "../../context/setcity-context/setcity.context";

const WeatherAPI = () => {
  const { latitude, longitude, setWeatherInfo } = useContext(SetCityContext);
  
  useEffect(() => {
    const getWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3e7674abd3e74c5a4844b4875033acb6`
      );
      const data = await response.json();
      setWeatherInfo(data);
    };
    getWeatherData();
  }, [latitude, longitude, setWeatherInfo]); //for Re-rendering when coordinates changes
};;

export default WeatherAPI;
