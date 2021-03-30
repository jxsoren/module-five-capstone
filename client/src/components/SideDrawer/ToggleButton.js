import React from 'react'
import './ToggleButton.css'

export default function drawerToggleButton(props){
    return(
        <button className="toggle-button" onClick={props.handleClick}>
            <img className="nav-salt" src="https://cdn.iconscout.com/icon/free/png-256/salt-shaker-2519228-2115363.png" alt="3 Line Nav"/>
        </button>
    )
}