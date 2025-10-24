import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h4 className="row city">
        {props.info.city}
        {", "}
        {props.info.country}
      </h4>
      <div className="row">
        <div className="col-1 main-img">
          <img
            src={props.info.icon_url}
            alt={props.info.description}
            id="big"
          />
        </div>
        <div className="col-2 deg">
          <WeatherTemp celsius={props.info.temperature} />
        </div>
        <div className="col-4 details">
          <ul>
            <li>Feels Like: {Math.round(props.info.feels_like)}°C</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
        <div className="col-3 description">
          <li className="title">Weather</li>
          <li className="date">
            <FormattedDate date={props.info.date} />
          </li>
          <li className="today-weather-desc text-capitalize">
            {props.info.description}
          </li>
        </div>
      </div>
    </div>
  );
}
