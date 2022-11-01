import React from "react";
import "../styles/Modal.css";

export default function Modal() {
    const [modal, setModal] = React.useState(false);
    const [formData, setFormData] = React.useState({
        login: "",
        password: ""
    })
    function toggleModal() {
        setModal(prevModal => !prevModal)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    function handleFormChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // prevent page scrolling while modal is active
    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

    return (
        <>
            <button className="btn-modal" onClick={toggleModal}>Open</button>
            { modal &&
                (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign in</h2>
                            <input
                                type="text"
                                placeholder="Login"
                                className="form-input"
                                onChange={handleFormChange}
                                name="login"
                                value={formData.login}
                            />
                            <input 
                                type="password" 
                                placeholder="Password"
                                className="form-input"
                                name="password"
                                onChange={handleFormChange}
                                value={formData.password}
                            />
                            <button className="form-button">Log in</button>
                        </form>
                        
                        <button className="close-modal" onClick={toggleModal}>X</button>
                    </div>  
                </div>                
                )
            }
        </>
    )
}