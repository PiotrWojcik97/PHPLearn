import React from "react";
import { allowedColors } from "../utils/utils";
import "../styles/Modal.css";

/**
 * Modal class representing Create Event Popup
 * @param {toggleModal} props 
 * @returns Modal
 */
export default function ModalEvent(props) {
    const [formData, setFormData] = React.useState({
        startDate: "",
        endDate: "",
        eventType: 0,
        shortDescription: "",
        longDescription: "",
        userID: 0,
        imageURL: "",
        name: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    function handleFormChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <div className="modal">
            <div className="overlay" onClick={props.toggleModal}></div>
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <h2>Create Event</h2>
                    <input
                        type="text"
                        placeholder="Event name"
                        className="form-input"
                        onChange={handleFormChange}
                        name="eventName"
                        value={formData.name}
                    />
                    <input
                        type="datetime-local"
                        className="datetime-input"
                        onChange={handleFormChange}
                        name="eventName"
                        value={formData.startDate}
                    />
                    <fieldset>
                        <legend>Current employment status</legend>
                        <input 
                            type="radio"
                            id="unemployed"
                            name="employment"
                            value="unemployed"
                            checked={formData.employment === "unemployed"}
                            onChange={handleFormChange}
                        />
                        <label htmlFor="unemployed">Unemployed</label>
                        <br />
                        
                        <input 
                            type="radio"
                            id="part-time"
                            name="employment"
                            value="part-time"
                            checked={formData.employment === "part-time"}
                            onChange={handleFormChange}
                        />
                        <label htmlFor="part-time">Part-time</label>
                        <br />
                        
                        <input 
                            type="radio"
                            id="full-time"
                            name="employment"
                            value="full-time"
                            checked={formData.employment === "full-time"}
                            onChange={handleFormChange}
                        />
                        <label htmlFor="full-time">Full-time</label>
                        <br />
                    </fieldset>
                    <button className="form-button">Submit</button>
                </form>
                
                <button className="close-modal" onClick={props.toggleModal}>X</button>
            </div>  
        </div>
    )
}