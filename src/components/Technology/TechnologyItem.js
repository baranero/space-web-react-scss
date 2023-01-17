import './TechnologyItem.sass';

const TechnologyItem = (props) => {
    const handleTechnology = (event) => {
        props.onPickedTechnology(event.target.value)
        console.log(event.target.value);
    }

    return (
        <section key={props.id} className='container-technology'>
            <div className='title'>
                <h5><span>03</span> SPACE LAUNCH 101</h5>
            </div>
            <div className='image'>
                <img src={props.image} alt="Technology" />
            </div>
            <div className='subtitle'>
                <h5>THE TERMINOLOGY...</h5>
            </div>
            <div className='type'>
                <h3>{props.name}</h3>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className='navigate-technology'>
                <ul className='navigate-dot-list'>
                    {props.data.map((item) => {
                        if (item.id === props.style) {
                            return <input className='active-dot' key={item.id} onClick={handleTechnology} name={item.id} value={item.id} type="button"/>
                        } 
                        if (item.name !== props.style) {
                            return <input className='unactive-dot' key={item.id} onClick={handleTechnology} name={item.id} value={item.id} type="button"/>
                        }
                        }   
                    )}
                </ul>
            </div>
        </section>
        )
}

export default TechnologyItem