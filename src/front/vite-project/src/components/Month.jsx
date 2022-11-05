import React from "react";
import Day from "./Day";
import MonthLabel from "./MonthLabel";
import parse from 'html-react-parser'
import "../styles/Month.css";

/**
 * What should be done better in project: (it has not been done so far due to lack of time)
 *  - refactor from Month to Calendar name (Calendar name is better)
 *  - generate users dynamically and adjust content to them instead of statically (those face bubble on the left)
 *  - divide content for more readable components instead of so many items put inside one component
 *  - resolve weird scaling on a smaller screen (appearing bar on the bottom)
 *  - 4 lines indent everywhere instead of 2 in some files
 *  - tests
 *  - better documentation
 */
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
      <div className="month-div month-padding">
        {props.month[0].map((day, i) => {
            return <MonthLabel key={i} dayName={day.format("ddd").toUpperCase()} />;
        })}
      </div>
      <div className="calendar-box">
        {/* month sidebar should be generated instead of statically written- future job to do */}
        <div className="month-sidebar">
          <img className="calendar-faceimg calendar-firstimg" src="face_baby_square_small.jpg"/>
          <img className="calendar-faceimg" src="face_girl_square_small.jpg"/>
          <img className="calendar-faceimg" src="dog_square_small.jpg"/>
          <img className="calendar-faceimg calendar-firstimg" src="face_baby_square_small.jpg"/>
          <img className="calendar-faceimg" src="face_girl_square_small.jpg"/>
          <img className="calendar-faceimg" src="dog_square_small.jpg"/>
          <img className="calendar-faceimg calendar-firstimg" src="face_baby_square_small.jpg"/>
          <img className="calendar-faceimg" src="face_girl_square_small.jpg"/>
          <img className="calendar-faceimg" src="dog_square_small.jpg"/>
          <img className="calendar-faceimg calendar-firstimg" src="face_baby_square_small.jpg"/>
          <img className="calendar-faceimg" src="face_girl_square_small.jpg"/>
          <img className="calendar-faceimg" src="dog_square_small.jpg"/>
          <img className="calendar-faceimg calendar-firstimg" src="face_baby_square_small.jpg"/>
          <img className="calendar-faceimg" src="face_girl_square_small.jpg"/>
          <img className="calendar-faceimg" src="dog_square_small.jpg"/>
        </div>
        <div className="month-div">
          {props.month.map((row, i) => {
            return row.map((day, j) => {
              return <Day day={day} key={i * row.length + j} />;
            });
          })}
        </div>
      </div>
    </div>
  );
}
