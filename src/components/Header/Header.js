import { Link } from "react-router-dom"
import logo from "..//..//images/logo.png"
import './Header.sass'

const Header = (props) => {



    return (
        <header>
            <img src={logo} alt="Logo" />
            <hr/>
            <ul>
                <li><Link onClick={() => props.onBackground(props.homepage)} to="/"><span>00</span>HOME</Link></li>
                <li><Link onClick={() => props.onBackground(props.destination)} to="/destination"><span>01</span>DESTINATION</Link></li>
                <li><span>02</span>CREW</li>
                <li><span>03</span>TECHNOLOGY</li>
            </ul>
        </header>
    )
}

export default Header