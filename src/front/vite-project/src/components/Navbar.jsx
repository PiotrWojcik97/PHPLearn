import '../styles/Navbar.css'

export default function Navbar() {

    return (
        <nav>
            <img className='nav--img' src='../../public/logo.png'/>
            <h2 className='nav--title'>EventDiary</h2>
            <button className='nav--button'>Log in</button>
            <img className='nav--img' src='../../public/login.png'/>
        </nav>
    )
}