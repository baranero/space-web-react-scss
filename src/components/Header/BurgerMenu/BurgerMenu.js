import { Fragment } from "react"
import burger from "../../../images/hamburger-menu.svg"
import './BurgerMenu.sass'

const BurgerMenu = (props) => {
    return (
        <Fragment>
            <img onClick={props.onClick} className="burger-menu" src={burger} />
        </Fragment>
    )
}

export default BurgerMenu