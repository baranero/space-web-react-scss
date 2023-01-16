import './CrewItem.sass';

const CrewItem = (props) => {
    const handleCrew = (event) => {
        props.onPickedCrew(event.target.value)
        console.log(event.target.value);
    }

    console.log(props.data);

    return (
        <section key={props.id} className='container'>
            <div className='title'>
                <h5><span>02</span> MEET YOUR CREW</h5>
            </div>
            <div className='image'>
                <img src={props.image} alt="Crew" />
            </div>
            <div className='function'>
                <h4>{props.function}</h4>
            </div>
            <div className='name'>
                <h3>{props.name}</h3>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className='navigate'>
                <ul>
                    {props.data.map((item) => {
                        if (item.name === props.style) {
                            return <input className='active-dot' key={item.id} onClick={handleCrew} name={item.name} value={item.name} type="button"/>
                        } 
                        if (item.name !== props.style) {
                            return <input className='unactive-dot' key={item.id} onClick={handleCrew} name={item.name} value={item.name} type="button"/>
                        }
                        }   
                    )}
                </ul>
            </div>
        </section>
        )
}

export default CrewItem