import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });
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
      pressure: response.data.temperature.pressure,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container Weather">
        <div className="row">
          <form>
            <div className="input-group">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <h4 className="row city">
          {weatherData.city}
          {", "}
          {weatherData.country}
        </h4>
        <div className="row">
          <div className="col-1 main-img">
            <img src={weatherData.icon_url} alt={weatherData.description} />
          </div>
          <div className="col-1 deg">
            <strong className="today-deg">
              {Math.round(weatherData.temperature)}
            </strong>
            °C
          </div>
          <div className="col-4 details">
            <ul>
              <li>Feels Like: {Math.round(weatherData.feels_like)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Pressure: {weatherData.pressure}</li>
            </ul>
          </div>
          <div className="col-4 description">
            <p className="title">Weather</p>
            <p className="date">
              <FormattedDate date={weatherData.date} />
            </p>
            <p className="today-weather-desc text-capitalize">
              {weatherData.description}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "14b3e71od6df40977d863a00tdaeb6ef";
    let city = "Toronto";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
