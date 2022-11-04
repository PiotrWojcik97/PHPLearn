import React from 'react'
import "../styles/Day.css";

export default function Day(props) {
    function handleClick(event) {
        console.log("Clicked!")
    }
    
    return (
        <div className='tile-div' onClick={handleClick}>
            <span>{props.day.format('DD')}</span>
            
        </div>
    )
}
