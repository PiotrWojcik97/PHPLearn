import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Modal from './components/Modal'
import { getMonth } from "./utils/utils"
import globals from './utils/globals'

export default function App() {
    const [modal, setModal] = React.useState(false);
    const [currentMonth, setCurrentMonth] = React.useState(getMonth(globals.currentMonthIndex - 1))
    
    function changeMonth(event) {
        const {name} = event.target
        if(name === "decrement")
            globals.currentMonthIndex--
        else
            globals.currentMonthIndex++

        setCurrentMonth(getMonth(globals.currentMonthIndex - 1))
        // isDecrementing ? setCurrentMonth(getMonth(10)) : setCurrentMonth(getMonth(12))
    }

    function toggleModal() {
        setModal(prevModal => !prevModal)
    }

    // prevent page scrolling while modal is active
    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

    return (
        <div className="App">
            <Navbar toggleModal={toggleModal}/>
            <MainContent currentMonth={currentMonth} changeMonth={changeMonth} />
            {modal && <Modal toggleModal={toggleModal} />}
        </div>
    )
}
