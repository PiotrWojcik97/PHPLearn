import React from 'react'
import EventLine from './EventLine';
import "../styles/Day.css";

export default function Day(props) {
    const divRef = React.useRef(null);

    React.useEffect(() => {
        console.log('width', divRef.current ? divRef.current.offsetWidth : 0);
    }, [divRef.current]);

    function getEventArray(userNum) {
        if(props.userEventArray)
            return props.userEventArray[userNum]
    }

    function handleClick(event) {
        console.log("Clicked!")
    }
    
    return (
        <div className='tile-div' ref={divRef} onClick={handleClick}>
            <span>{props.day.format('DD')}</span>
            <div>
                <EventLine eventArray={getEventArray(0)} maxWidth={100} />
                <EventLine eventArray={getEventArray(1)} maxWidth={100} />
                <EventLine eventArray={getEventArray(2)} maxWidth={100} />
            </div>
        </div>
    )
}