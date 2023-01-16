import { useEffect, useState } from "react"
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
                <li className={location.pathname.includes('/') && location.pathname.length <= 1 ? "active" : "unactive"}><Link  onClick={() => {props.onBackground(props.homepage)}} to="/"><span>00</span>HOME</Link></li>
                <li className={location.pathname.includes("/destination") ? "active" : "unactive"}><Link onClick={() => {
                    props.onBackground(props.destination)}} to="/destination"><span>01</span>DESTINATION</Link></li>
                <li className="unactive"><span>02</span>CREW</li>
                <li className="unactive"><span>03</span>TECHNOLOGY</li>
            </ul>
        </header>
    )
}

export default Header