import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {PlantContextProvider} from './plantContext'
import App from './App'

const root = document.getElementById("root")

ReactDOM.render(
    <Router> 
        <PlantContextProvider>
            <App />
        </PlantContextProvider>
    </Router>,
    root
)

