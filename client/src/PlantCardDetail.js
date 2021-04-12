// import { Link } from "react-router-dom"

export default function PlantCardDetail(props) {
    console.log(props)

    function addedToCart() {
        console.log("your item has been added")
    }

    return (
        <div id="plant">
            <img src={props.plant.image} alt="A plant" id="plant-specific-image" />
            <h3>{props.plant.name}</h3>
            <p>{props.plant.price}</p>
            <p>{props.plant.description}</p>
            <button onClick={addedToCart}>Add to Cart</button>
        </div>
    )
}
