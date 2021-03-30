import { useContext } from "react"
import { PlantContext } from "../../plantContext"
import PlantListDetail from "../../PlantListDetail"
import "./ShopList.css"

export default function ShopList(){
    const plantDB = useContext(PlantContext)

    const listItem = plantDB.plantState.map((plant) => {
        return <PlantListDetail key={plant.id} plant={plant}/>
    })
    return(
        <div>
            <div id="shop-list-container">{listItem}</div>
        </div>
    )
}

// plant-components
