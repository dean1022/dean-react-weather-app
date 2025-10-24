import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
    const apiKey = "14b3e71od6df40977d863a00tdaeb6ef";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }, [props.cityName]);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="weatherForecast">
      <div className="row">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return <WeatherForecastDay data={dailyForecast} />;
          }
        })}
      </div>
    </div>
  );
}
