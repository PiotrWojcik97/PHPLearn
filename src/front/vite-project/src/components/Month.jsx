import React from "react";
import Day from "./Day";
import MonthLabel from "./MonthLabel";
import "../styles/Month.css";

export default function Month(props) {
  
  return (
    <div>
      <div className="month-div">
        {props.month[0].map((day, i) => {
            return <MonthLabel key={i} dayName={day.format("ddd").toUpperCase()} />;
        })}
      </div>
      <div className="month-div">
        {props.month.map((row, i) => {
          return row.map((day, j) => {
            return <Day day={day} key={i * row.length + j} />;
          });
        })}
      </div>
    </div>
  );
}
