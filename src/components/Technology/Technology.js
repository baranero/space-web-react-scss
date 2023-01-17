import { Fragment, useState } from "react"
import TechnologyItem from "./TechnologyItem"

const Technology = (props) => {
    const [pickedTechnology, setPickedTechnology] = useState("DOUGLAS HURLEY")

    const pickedTechnologyHandler = (technology) => {
        setPickedTechnology(technology)
    }

    const filteredTechnology = props.data.filter(technology => {
        return Technology.name === pickedTechnology
    })

    console.log(filteredTechnology);
    console.log(pickedTechnology);

    return (
        <Fragment>
            {filteredTechnology.map((item) => (
                <TechnologyItem
                    data={props.data}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    function={item.function}
                    image={item.image}
                    onPickedTechnology={pickedTechnologyHandler}
                    style={item.name}
                    mark={item.mark}
                />
            ))}

        </Fragment>
    )
}

export default Technology