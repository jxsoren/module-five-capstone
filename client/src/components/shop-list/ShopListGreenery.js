import { useContext } from "react"
import { PlantContext } from "../../plantContext"
import PlantListDetail from "../../PlantListDetail"
import "./ShopList.css"


export default function ShopListCacti() {
    const plantDB = useContext(PlantContext)

    const greeneryFilter = plantDB.plantState.filter((greenery) => greenery.plant_type === "House Plant");
console.log(greeneryFilter)
    const listItem = greeneryFilter.map((greenery) => {
        return <PlantListDetail key={greenery.id} plant={greenery}/>
    })

    return (
        <div>
            <div className="shop-list-container">{ listItem }</div>
        </div>
    )
}