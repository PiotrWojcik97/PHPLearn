import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

export default function App() {

  const [issLoginPopupShown, setIsLoginPopupShown] = React.useState(false)
  

  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
    </div>
  )
}
