import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PlantContext = React.createContext()

const usePlantContextHook = () => {
    const [ plantState, setPlantState ] = useState([])
    
    const getPlants = () => {
        axios.get("/plants") 
            .then(res => setPlantState(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // const getCacti = () => {
    //     axios.get("/plants") 
    //         .then(res => setPlantState(res.data))
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    // const getSucculents = () => {
    //     axios.get("/plants") 
    //         .then(res => setPlantState(res.data))
    //         .catch(err => console.log(err.response.data.errMsg))
    // }
//do I need a get one?  are these "gets even working? confused  took cacti off- stil works

    useEffect(() => {
        getPlants()
        // getCacti()
        // getSucculents()
    }, [])

    const addPlant = (newPlant) => {
        axios.post("/plants", newPlant)
        .then(res => {
            setPlantState(prevPlants => [...prevPlants, res.data])
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


// add more requests here //
    // const [ cart, setCart ] = useState([])

    // const getCartItems = () => {
    //     return axios
    //     .get *not finnished*
    // }

    return {
        plantState,
        getPlants,
        addPlant,
        // getCacti,
        // getSucculents
        // cart,
        // getCartItems
    }

}


function PlantContextProvider(props) {

    const plantDB = usePlantContextHook()

    return (
        <PlantContext.Provider value={ plantDB }>
            { props.children }
        </PlantContext.Provider>
    )
}



export { PlantContextProvider, PlantContext }
