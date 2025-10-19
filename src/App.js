import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://deanlucianvoss.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Dean Voss
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/dean1022/dean-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
