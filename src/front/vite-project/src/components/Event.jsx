import React from 'react'
import "../styles/Event.css";

export default function Event(props) {
    // console.log(props.startPos)
    console.log(props.startPos)
    return (
        <div
            className='event-div'
            style={{"width": `${100*(props.endPos-props.startPos)}%`,
                    "marginLeft": `${100*(props.startPos)}%`}}
        />
    )
}
