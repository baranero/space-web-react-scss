import './HomePage.sass'
import { Fragment } from 'react'
import explore from '../../images/oval.jpg'

import { Link } from 'react-router-dom'

const HomePage = (props) => {

    return (
        <Fragment>
            <section className='main-page'>
                <div className='main-page-description'>
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link onClick={() => props.onBackground(props.destination)} to="/destination"><img src={explore} alt="Explore button" /></Link>
            </section>
        </Fragment>
    )
}

export default HomePage