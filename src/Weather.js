import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h4 className="row city">Toronto, ON, Canada</h4>
      <div className="row">
        <div className="col-1 main-img">
          <img
            src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/cloudy_light.svg"
            alt="Cloudy"
          />
        </div>
        <div className="col-1 deg">
          <strong className="today-deg">19</strong>°C
        </div>
        <div className="col-4 details">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 71%</li>
            <li>Wind: 27 km/h</li>
          </ul>
        </div>
        <div className="col-4 description">
          <p className="title">Weather</p>
          <p className="date">Sunday 3:00 PM</p>
          <p className="today-weather-desc">Cloudy</p>
        </div>
      </div>
    </div>
  );
}
