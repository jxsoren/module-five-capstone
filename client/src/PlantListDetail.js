import { Link } from 'react-router-dom'


export default function PlantListDetail(props) {
    console.log(props)

    return (
        <div className="plant">
            <Link to={{pathname: `/details/${props.plant._id}`}}><img src={props.plant.image} alt="A plant" id="plant-img" /></Link>
            <h3>{props.plant.name}</h3>
            <p>{props.plant.price}</p>
            {/* <p>Qty: {props.quantity}</p> */}
        </div>
    )
}