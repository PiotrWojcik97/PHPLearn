import React from "react";
import Day from "./Day";
import MonthLabel from "./MonthLabel";
import parse from 'html-react-parser'
import "../styles/Month.css";

export default function Month(props) {
  const lt = "<"
  const gt = ">"
  return (
    <div>
      <div className='month-name'>
        <button id="calendar-button" name="decrement" onClick={props.changeMonth}>{parse(lt)}</button>
        <h3>{props.month[2][1].format("MMMM")}</h3>
        <button id="calendar-button" name="increment" onClick={props.changeMonth}>{parse(gt)}</button>
      </div>
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
