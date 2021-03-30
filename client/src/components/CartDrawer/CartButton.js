import React from 'react'
import './CartButton.css'

export default function cartToggleButton(props){
    return(
        <button className="cart-button" onClick={props.handleClick}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_72513.png" className="cart-back-button" alt="back icon"/>
        </button>
    )
}