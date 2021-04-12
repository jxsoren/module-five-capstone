// import { Link } from "react-router-dom"

export default function PlantCardDetail(props) {
    console.log(props)

    return (
        <div id="plant">
            <img src={props.plant.image} alt="A plant" id="plant-specific-image" />
            <h3>{props.plant.name}</h3>
            <p>{props.plant.price}</p>
            <p>{props.plant.description}</p>
            <button>Add to Cart</button>
        </div>
    )
}

{/* <Link to={{pathname: `/details/${props.plant._id}`}}> */}
// </Link>