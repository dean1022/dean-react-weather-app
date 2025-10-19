import React from "react";

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
  let time = "a.m.";
  if (hours > 12) {
    hours = hours - 12;
    time = "p.m.";
  }
  if (hours < 10) hours = "0" + hours;
  if (mins < 10) mins = "0" + mins;

  return (
    <div>
      {day} {hours}
      {":"}
      {mins} {time}
    </div>
  );
}
