import React from "react";
import "./Weather.css";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let mins = props.date.getMinutes();
  if (hours < 10) hours = `0${hours}`;
  if (mins < 10) mins = `0${mins}`;

  return (
    <div>
      {day} {hours}
      {":"}
      {mins}
    </div>
  );
}
