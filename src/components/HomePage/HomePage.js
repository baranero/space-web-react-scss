import './HomePage.sass'
import { Fragment } from 'react'
import explore from '../../images/oval.png'
import Header from '../Header/Header'

const HomePage = (props) => {
    return (
        <Fragment>
            <Header/>
            <section className='main-page'>
                <div className='main-page-description'>
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <img src={explore} alt="Explore button" />
            </section>
        </Fragment>
    )
}

export default HomePage