import logo from "..//..//images/logo.png"
import './Header.sass'

const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <hr/>
            <ul>
                <li><span>00</span>HOME</li>
                <li><span>01</span>DESTINATION</li>
                <li><span>02</span>CREW</li>
                <li><span>03</span>TECHNOLOGY</li>
            </ul>
        </header>
    )
}

export default Header