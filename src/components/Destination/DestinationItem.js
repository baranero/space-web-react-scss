import './DestinationItem.sass';

const DestinationItem = (props) => {

    const handleMoon = (event) => {
        props.onPickedMoon(event.target.value)
    }

    return (
            <section key={props.id} className='container'>
                <div className='title'>
            <h5><span>01</span> PICK YOUR DESTINATION</h5>
        </div>
        <div className='image'>
            <img src={props.image} alt="Moon" />
        </div>
        <div className='navigate'>
            <ul>
                {props.data.map((props) => (
                    <input key={props.id} onClick={handleMoon} name={props.name} value={props.name} type="button"/>
                ))}
            </ul>
        </div>
        <div className='name'>
            <h2>{props.name}</h2>
        </div>
        <div className='description'>
            <p>{props.description}</p>
        </div>
        <div className="line-cont">
            <hr className='line'/>
        </div>
        <div className='distance'>
            <span>AVG.DISTANCE</span>
            <h6>{props.distance}</h6>
        </div>
        <div className='time'>
            <span>EST. TRAVEL TIME</span>
            <h6>{props.travel}</h6>
        </div>
    </section>
        )
}

export default DestinationItem