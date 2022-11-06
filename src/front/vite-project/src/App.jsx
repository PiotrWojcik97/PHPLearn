import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Modal from './components/Modal'
import { getMonth, calculateEventTable } from "./utils/utils"
import globals from './utils/globals'
import exampleData from './utils/data'
import ModalEvent from './components/ModalEvent'

export default function App() {
    const [modal, setModal] = React.useState(false);
    const [modalEvent, setModalEvent] = React.useState(false);
    const [currentMonth, setCurrentMonth] = React.useState(getMonth(globals.currentMonthIndex - 1))
    const eventArray = calculateEventTable(exampleData)

    function changeMonth(event) {
        const {name} = event.target
        if(name === "decrement")
            globals.currentMonthIndex--
        else
            globals.currentMonthIndex++

        setCurrentMonth(getMonth(globals.currentMonthIndex - 1))
    }

    function toggleModal() {
        setModal(prevModal => !prevModal)
    }

    function toggleEventModal() {
        console.log("Modal clicked!")
        setModalEvent(prevEventModal => !prevEventModal)
    }

    // prevent page scrolling while any of the modal is active
    modal || modalEvent ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

    return (
            <div className="App">
                <Navbar toggleModal={toggleModal}/>
                <MainContent
                    currentMonth={currentMonth}
                    changeMonth={changeMonth}
                    eventArray={eventArray} 
                    toggleEventModal={toggleEventModal}
                    />
                {modal && <Modal toggleModal={toggleModal} />}
                {modalEvent && <ModalEvent toggleModal={toggleEventModal} />}
            </div>
    )
}
