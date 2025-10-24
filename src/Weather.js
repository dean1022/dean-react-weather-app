import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.default_city);
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      feels_like: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      ready: true,
    });
  }

  function search() {
    const apiKey = "14b3e71od6df40977d863a00tdaeb6ef";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container Weather">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCityChange}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <WeatherInfo info={weatherData} />
        <br />
        <WeatherForecast cityName={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
