import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "..//..//images/logo.png"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import MobileMenu from "./BurgerMenu/MobileMenu"
import './Header.sass'

const Header = (props) => {

    const location = useLocation()

    const [showMenu, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(prevState => !prevState)
    }

    console.log(showMenu);

    return (
        <header>
            <Link onClick={() => {props.onBackground(props.homepage)}} to="/"><img className="logo" src={logo} alt="Logo" /></Link>
            <hr/>
            {props.mobile && !showMenu && <BurgerMenu
                                onClick={menuHandler}/>}

            {showMenu && <MobileMenu
                                onBackground={props.onBackground}
                                homepage={props.homepage}
                                destination={props.homepage}
                                crew={props.crew}
                                technology={props.technology}
                                onClose={menuHandler}
                        />}
            {!props.mobile && <ul>
                <li 
                    >
                        <Link
                            className={location.pathname.includes('/') && 
                            location.pathname.length <= 1 ? 
                            "active" : "unactive"}  
                            onClick={() => {props.onBackground(props.homepage)}}
                            to="/"><span>00</span>HOME
                        </Link>
                </li>
                <li 
                    >
                        <Link
                            className={location.pathname.includes("/destination") ?
                            "active" : "unactive"}
                            onClick={() => {props.onBackground(props.destination)}}
                            to="/destination"><span>01</span>DESTINATION
                        </Link>
                </li>
                <li 
                    >
                        <Link
                            className={location.pathname.includes("/crew") ?
                            "active" : "unactive"}
                            onClick={() => {props.onBackground(props.crew)}}
                            to="/crew"><span>02</span>CREW
                        </Link>
                </li>
                <li 
                    >
                        <Link
                            className={location.pathname.includes("/technology") ?
                            "active" : "unactive"}
                            onClick={() => {props.onBackground(props.technology)}}
                            to="/technology"><span>03</span>TECHNOLOGY
                        </Link>
                </li>
            </ul>}
        </header>
    )
}

export default Header