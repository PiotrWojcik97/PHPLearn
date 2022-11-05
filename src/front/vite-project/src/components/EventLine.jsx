import React from 'react'
import Event from './Event';
import "../styles/Event.css";

export default function EventLine(props) {

  function isEventPresent() {
    if(props.eventArray && props.eventArray.length > 0)
      return true
    return false
  }

  return (
    <div className='event-container'>
      { isEventPresent() && <div className='event-div'></div>}
    </div>
  )
}
