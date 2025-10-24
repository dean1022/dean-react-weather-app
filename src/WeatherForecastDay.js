import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="col days">
      <li className="weatherForecast-day">{day()}</li>
      <li>
        <img
          className="day-icon"
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </li>
      <li className="weatherForecast-temperatures">
        <span className="weatherForecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="weatherForecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </li>
    </div>
  );
}
