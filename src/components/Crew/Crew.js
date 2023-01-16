import { Fragment, useState } from "react"
import CrewItem from "./CrewItem"

const Crew = (props) => {
    const [pickedCrew, setPickedCrew] = useState("DOUGLAS HURLEY")

    const pickedCrewHandler = (crew) => {
        setPickedCrew(crew)
    }

    const filteredCrew = props.data.filter(crew => {
        return crew.name === pickedCrew
    })

    console.log(filteredCrew);
    console.log(pickedCrew);

    return (
        <Fragment>
            {filteredCrew.map((item) => (
                <CrewItem
                    data={props.data}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    function={item.function}
                    image={item.image}
                    onPickedCrew={pickedCrewHandler}
                    style={item.name}
                    mark={item.mark}
                />
            ))}

        </Fragment>
    )
}

export default Crew