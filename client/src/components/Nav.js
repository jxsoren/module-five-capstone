import React from 'react'
import { Link } from 'react-router-dom'

import ToggleButton from './SideDrawer/ToggleButton'

export default function Nav(props){
    return(
        <div id='nav'>
            <ToggleButton handleClick={props.toggle}/>

            <Link to='/' className="nav-home">
                <h1 className="main-title">Salty Greens</h1>
            </Link>

            <h3 onClick={props.toggleCart}>Cart (0)</h3>
        </div>
    )
}