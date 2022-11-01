import '../styles/Header.css'

export default function Header() {

    return (
        <header>
            <img className='header--img' src='../../public/logo.png'/>
            <h1 className='header--title'>EventDiary</h1>
            <img className='header--img' src='../../public/login.png'/>
        </header>
    )
}