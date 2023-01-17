import { Link, useLocation } from "react-router-dom"
import logo from "..//..//images/logo.png"
import './Header.sass'

const Header = (props) => {

    const location = useLocation()
    console.log(location);

    return (
        <header>
            <Link onClick={() => {props.onBackground(props.homepage)}} to="/"><img src={logo} alt="Logo" /></Link>
            <hr/>
            <ul>
                <li 
                    className={location.pathname.includes('/') && 
                    location.pathname.length <= 1 ? 
                    "active" : "unactive"}>
                        <Link  
                            onClick={() => {props.onBackground(props.homepage)}}
                            to="/"><span>00</span>HOME
                        </Link>
                </li>
                <li 
                    className={location.pathname.includes("/destination") ?
                    "active" : "unactive"}>
                        <Link 
                            onClick={() => {props.onBackground(props.destination)}}
                            to="/destination"><span>01</span>DESTINATION
                        </Link>
                </li>
                <li 
                    className={location.pathname.includes("/crew") ?
                    "active" : "unactive"}>
                        <Link 
                            onClick={() => {props.onBackground(props.crew)}}
                            to="/crew"><span>02</span>CREW
                        </Link>
                </li>
                <li 
                    className={location.pathname.includes("/technology") ?
                    "active" : "unactive"}>
                        <Link 
                            onClick={() => {props.onBackground(props.technology)}}
                            to="/technology"><span>03</span>TECHNOLOGY
                        </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header