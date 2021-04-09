import { useContext } from "react"
import { useParams } from "react-router-dom"
import { PlantContext } from "../../plantContext"
import PlantListDetail from "../../PlantListDetail"
import "./ShopList.css"

export default function ShopList() {
    const plantDB = useContext(PlantContext)
    const { plantType } = useParams()
    console.log(plantType)
    
    const plantFilter = plantType === "all" ? 
    plantDB.plantState : 
    plantDB.plantState.filter((plant) => plant.plant_type.toLowerCase() === plantType);

    const listItem = plantFilter.map((plant) => {
        return <PlantListDetail key={plant.id} plant={plant}/>
    })
    return(
        <div>
            <div className="shop-list-container">{listItem}</div>
        </div>
    )
}
