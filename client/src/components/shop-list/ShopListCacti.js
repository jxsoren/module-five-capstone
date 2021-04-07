import { useContext } from "react"
import { PlantContext } from "../../plantContext"
import PlantListDetail from "../../PlantListDetail"


export default function ShopListCacti() {
    const plantDB = useContext(PlantContext)

    const cactiFilter = plantDB.plantState.filter((cacti) => cacti.plant_type === "Cactus");
console.log(cactiFilter)
    const listItem = cactiFilter.map((cacti) => {
        return <PlantListDetail key={cacti.id} plant={cacti}/>
    })

    return (
        <div>
            { listItem }
        </div>
    )
}