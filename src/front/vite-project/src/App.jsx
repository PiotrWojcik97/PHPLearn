import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Modal from './components/Modal'

export default function App() {

  const [isLoginPopupShown, setIsLoginPopupShown] = React.useState(false)
  
  function toogleLoginPopup(){
    setIsLoginPopupShown( prevIsLoginPopupShown => !prevIsLoginPopupShown)
  }

  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <Modal/>
    </div>
  )
}
