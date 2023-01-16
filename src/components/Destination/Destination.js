import { useLocation } from 'react-router-dom';
import './Destination.sass';
import destination from '../../images/destination-background.jpg'

const Destination = (props) => {
    


    return (
        <section className='container'>
            <div className='title'>
                <h5><span>01</span> PICK YOUR DESTINATION</h5>
            </div>
            <div className='image'>
                <img src={props.data[0].image} alt="Moon" />
            </div>
            <div className='navigate'>
                <ul>
                    {props.data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className='name'>
                <h2>{props.data[0].name}</h2>
            </div>
            <div className='description'>
                <p>{props.data[0].description}</p>
            </div>
            <div className="line-cont">
                <hr className='line'/>
            </div>
            <div className='distance'>
                <span>AVG.DISTANCE</span>
                <h6>{props.data[0].distance}</h6>
            </div>
            <div className='time'>
                <span>EST. TRAVEL TIME</span>
                <h6>{props.data[0].travel}</h6>
            </div>
        </section>
    )
}

export default Destination