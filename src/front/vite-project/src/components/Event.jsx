import React from 'react'
import "../styles/Event.css";

export default function Event(props) {
    const allowedColors = [
        "#A79AFF",
        "#FFBEBC",
        "#FFF5BA",
        "#85E3FF",
        "#D5AAFF",
    ]

    console.log(props.colorID)
    return (
        <div
            className='event-div'
            style={{"width": `${100*(props.endPos-props.startPos)}%`,
                    "marginLeft": `${100*(props.startPos)}%`,
                    "backgroundColor": `${allowedColors[props.colorID]}`
                }}
        />
    )
}
