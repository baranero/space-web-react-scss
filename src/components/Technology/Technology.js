import { Fragment, useState } from "react"
import TechnologyItem from "./TechnologyItem"

const Technology = (props) => {
    const [pickedTechnology, setPickedTechnology] = useState('1')

    const pickedTechnologyHandler = (technology) => {
        setPickedTechnology(technology)
    }

    const filteredTechnology = props.data.filter(technology => {
        return technology.id === pickedTechnology
    })

    console.log(filteredTechnology);
    console.log(pickedTechnology);
    // console.log(props.data);

    return (
        <Fragment>
            {filteredTechnology.map((item) => (
                <TechnologyItem
                    data={props.data}
                    key={item.id}
                    id={item.id}
                    name={item.type}
                    description={item.description}
                    image={item.image}
                    onPickedTechnology={pickedTechnologyHandler}
                    style={item.id}
                    mark={item.mark}
                />
            ))}

        </Fragment>
    )
}

export default Technology