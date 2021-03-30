import React from 'react'
import { Link } from 'react-router-dom'
import './Drawer.css'

export default function Drawer(props){
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'    
    }
    return(
        <div className={drawerClasses}>
            <ul onClick={props.handleBackdropClick}>
                <li>
                    <Link to='/' activeclassname="nav-home-active" className="nav-list-item">Home</Link>
                </li>

                <li>
                    <Link to='/shopList' activeclassname="nav-shopList-active" className="nav-list-item">Shop The Store</Link>
                </li>
            </ul>
        </div>
    )
}