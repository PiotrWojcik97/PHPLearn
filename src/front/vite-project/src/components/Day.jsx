import React from 'react'
import EventLine from './EventLine';
import "../styles/Day.css";

export default function Day(props) {
    function getEventArray(userNum) {
        if(props.userEventArray)
            return props.userEventArray[userNum]
    }

    return (
        <div className='tile-div'>
            <span>{props.day.format('DD')}</span>
            <div>
                <EventLine eventArray={getEventArray(0)} maxWidth={100} />
                <EventLine eventArray={getEventArray(1)} maxWidth={100} />
                <EventLine eventArray={getEventArray(2)} maxWidth={100} />
            </div>
        </div>
    )
}