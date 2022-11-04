import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Modal from './components/Modal'

export default function App() {
    const [modal, setModal] = React.useState(false);

    function toggleModal() {
    setModal(prevModal => !prevModal)
    }

    // prevent page scrolling while modal is active
    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

    return (
        <div className="App">
            <Navbar toggleModal={toggleModal}/>
            <MainContent/>
            {modal && <Modal toggleModal={toggleModal} />}
        </div>
    )
}
