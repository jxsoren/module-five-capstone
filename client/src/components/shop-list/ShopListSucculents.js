import { useContext } from "react"
// import { Link } from "react-router-dom"
import { PlantContext } from "../../plantContext"
import PlantListDetail from "../../PlantListDetail"
import "./ShopList.css"


export default function ShopListSuccu() {
    const plantDB = useContext(PlantContext)

    const succuFilter = plantDB.plantState.filter((succu) => succu.plant_type === "Succulent");
    console.log(succuFilter)

    const listItem = succuFilter.map((succu) => {
        return <PlantListDetail key={succu.id} plant={succu}/>
    })

    return (
        <div>
            {/* <button>Back</button>  do we want a back button?*/}
            <div className="shop-list-container">{ listItem }</div>
            
        </div>
    )
}