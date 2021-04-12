import { useContext } from "react"
import { PlantContext } from "../../plantContext"
import PlantCardDetail from "../../PlantCardDetail"
import { useParams } from "react-router-dom"
import "./PlantCard.css"

export default function PlantCard(){
    const plantDB = useContext(PlantContext)
    const { plantId } = useParams()
    console.log(plantId)
    console.log(plantDB.plantState)

    const plantItem = plantDB.plantState.find((plant) => 
        plant._id === plantId  
    )
    
    return (
        <PlantCardDetail key={plantId} plant={plantItem} />
    )
}