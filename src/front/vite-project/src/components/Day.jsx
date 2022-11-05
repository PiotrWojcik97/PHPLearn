import React from 'react'
import Event from './Event';
import "../styles/Day.css";

export default function Day(props) {
    function handleClick(event) {
        console.log("Clicked!")
    }
    
    const divRef = React.useRef(null);
    
    React.useEffect(() => {
        console.log('width', divRef.current ? divRef.current.offsetWidth : 0);
    }, [divRef.current]);

    return (
        <div className='tile-div' ref={divRef} onClick={handleClick}>
            <span>{props.day.format('DD')}</span>
            <div>
                <Event />
                <Event />
                <Event />
            </div>
        </div>
    )
}