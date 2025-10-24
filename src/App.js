import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="alert alert-warning">
        Due to an API bug which I am not in a position to fix, the current date
        and time may be stuck on Toronto time. However, the forecast days are
        accurate.
      </div>
      <div className="container">
        <Weather default_city="Toronto" />
        <hr />
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
            GitHub{" "}
          </a>
          and hosted on
          <a
            href="https://dean-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
