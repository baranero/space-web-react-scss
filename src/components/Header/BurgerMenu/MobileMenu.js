import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MobileMenu.sass'

const MobileMenu = (props) => {
    const location = useLocation()
    return (
    <Fragment>
        <div onClick={props.onClose} className="close"></div>
        <ul className='mobile__menu'>
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
        </ul>
    </Fragment>
    )
}

export default MobileMenu