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
    
        // const plantItem = plantId === plantDB.plantState
        //     .filter((plant) => 
        //         <PlantCardDetail key={plant.plantId} plant={plant} />
        //     )

        const plantItem = plantDB.plantState.find((plant) => 
                plant._id === plantId  
        )
        
    
    // const plantItem = idFilter.map((plant) => {
    //     return <PlantCardDetail>key={plant.id} plant={plant}</PlantCardDetail>
    // })

    return (
            <PlantCardDetail key={plantId} plant={plantItem} />
    )
}
// { plantItem }