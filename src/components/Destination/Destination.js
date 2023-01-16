import { Fragment, useState } from 'react';
import DestinationItem from './DestinationItem';

const Destination = (props) => {
    
    const [pickedMoon, setPickedMoon] = useState("MOON")

    const pickedMoonHandler = (moon) => {
        setPickedMoon(moon)
    }

    const filteredMoon = props.data.filter(moon => {
        return moon.name === pickedMoon
    })

    return (
        <Fragment>
            {filteredMoon.map((item) => (
                <DestinationItem
                    data={props.data}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    distance={item.distance}
                    image={item.image}
                    travel={item.travel}
                    onPickedMoon={pickedMoonHandler}
                    style={item.name}
                />
            ))}

        </Fragment>
    )
}

export default Destination