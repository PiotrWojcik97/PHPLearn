import React from "react";
import "../styles/Modal.css";
import exampleData from "../utils/data";
import { smallImagesArray } from "../utils/utils";

export default function ModalEventContent(props) {
    const [modalData, setModelData] = React.useState(getModalContent(props.eventID))
    
    function getModalContent(eventID) {
        console.log(eventID)
        for(let idx=0; idx < exampleData.data.length; idx++) {
            if(exampleData.data[idx]._id == eventID)
            {
                return exampleData.data[idx]
            }
        }
        return undefined
    }
    console.log(modalData)

    function findArrayID() {
        for(let idx=0; idx < exampleData.data.length; idx++) {
            if(exampleData.data[idx]._id == props.eventID)
            {
                return idx
            }
        }
        return undefined
    }

    function deleteEvent() {
        console.log(exampleData.data.length)
        exampleData.data.splice(findArrayID(), 1)
        console.log(exampleData.data.length)
        props.notifyEventUpdate()
        props.toggleModal()
    }

    return (
        <div className="modal">
            <div className="overlay" onClick={props.toggleModal}></div>
            <div className="modal-content">
                <div className="picture-description-holder">
                    <img className="modal-picture" src={smallImagesArray[modalData.user_id]}/>
                    <div>
                        <h3>{modalData.name}</h3>
                        <span>{modalData.short_description}</span>
                    </div>
                </div>
                <span>{modalData.long_description}</span>
                <div className="modal-buttons">
                    <button onClick={deleteEvent}>Delete</button>
                    <button id="modal-update-button" onClick={props.toggleModal}>Update</button>
                </div>
                <button className="close-modal" onClick={props.toggleModal}>X</button>
            </div>  
        </div>
    )
}