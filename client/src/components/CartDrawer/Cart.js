import React from "react"
import { Link } from 'react-router-dom'
import CartButton from './CartButton'
import './Cart.css'

export default function Cart(props){
    let cartClasses = 'cart-drawer'
    if(props.show){
        cartClasses = 'cart-drawer open'
    } 

    return(
        <div className={cartClasses}>
                <CartButton handleClick={props.toggle} />

            <h3 className="cart-total">Your Cart ({props.cartItemTotal}0)</h3>

            <ul className="cart-items">
                <li></li>
            </ul>
        </div>
    )
}
