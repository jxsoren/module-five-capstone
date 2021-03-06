import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/CartDrawer/Cart'
import ShopList from './components/shop-list/ShopList'
import Footer from './components/Footer'
import PlantCard from './components/detail-page/PlantCard'
import Nav from './components/Nav'
import Backdrop from './components/Backdrop/Backdrop'
import Drawer from './components/SideDrawer/Drawer'

export default function App(){
    const [ drawerOpen, setDrawerOpen ] = useState(false)
    const [ cartOpen, setCartOpen ] = useState(false)

    const drawerToggler = () => {
        setDrawerOpen(prevDrawerState => !prevDrawerState)
    }

    const cartToggler = () => {
        setCartOpen(prevCartState => !prevCartState)
    }

    const backdropHandler = () => {
        setDrawerOpen(false)
        setCartOpen(false)
        console.log('backdrop handler has just been called')
    }

    let backdrop;
    if(drawerOpen || cartOpen){
        backdrop = <Backdrop 
            handleBackdropClick={backdropHandler} 
        />
    }

    return(
        <div className="parent">

        <div style={{height: '100%'}}>
            <nav>
                <Nav 
                    toggle={drawerToggler}
                    toggleCart={cartToggler}
                />
            </nav>
            <Cart 
                toggle={cartToggler}
                show={cartOpen}
                handleBackdropClick={backdropHandler}
            />
            {backdrop}

            <Drawer 
                show={drawerOpen}
                handleBackdropClick={backdropHandler}
            />
            {backdrop}       
        </div>

            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/shopList/:plantType">
                        <ShopList />
                    </Route>

                    <Route path="/details/:plantId">
                        <PlantCard />
                    </Route>
                </Switch>
            </main>

            <footer className="footerParent">
                <Footer />
            </footer>
        </div>
    )
}