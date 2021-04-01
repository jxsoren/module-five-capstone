import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {PlantContext} from '../plantContext'
import './Styles/Home.css'

export default function Home(props){
    const c = useContext(PlantContext)
    return(
        <div className="home">

            <div className="home-img-container">
                <h1>Salt Lake City's Finest Greenery</h1>
                <h2>"Grace Your Home With Earth's Viridescent Riches"</h2>
                <img className="hero-img" src="https://www.mygardenlife.com/uploads/2018/09/pots%20of%20flowering%20plants%20near%20a%20bench_lead1.jpg" alt="hero-plant"/>
            </div>

        <hr />

            <div className="shop-link-container">
                <Link to="/shop-greenery" className="shop-link">
                    <h3>Shop Greenery</h3>
                    <span className="shop-link-thumbnail" id="greenery-thumbnail">
                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/1473033/the-sill_potted-plant_fiddle-leaf-fig-6_hyde_black-7_1500x-progressive_c20b660400aa6a1b24268122b9b639af.fit-720w.jpg" alt="plant-thumbnail"></img>
                    </span>
                </Link>

                <Link to="/shop-flowers" className="shop-link">
                    <h3>Shop Flowers</h3>
                    <span className="shop-link-thumbnail" id="flower-thumbnail">
                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/1473033/the-sill_potted-plant_fiddle-leaf-fig-6_hyde_black-7_1500x-progressive_c20b660400aa6a1b24268122b9b639af.fit-720w.jpg" alt="plant-thumbnail"></img>
                    </span>
                </Link>

                <Link to="/shop-cacti" className="shop-link">
                    <h3>Shop Cacti</h3>
                    <span className="shop-link-thumbnail" id="cacti-thumbnail">
                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/1473033/the-sill_potted-plant_fiddle-leaf-fig-6_hyde_black-7_1500x-progressive_c20b660400aa6a1b24268122b9b639af.fit-720w.jpg" alt="plant-thumbnail"></img>
                    </span>
                </Link>
            </div>

        <hr />

            <h1>Best Sellers</h1>
            
            <div className="best-sellers">
                <span className="shop-link-thumbnail">
                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/1473033/the-sill_potted-plant_fiddle-leaf-fig-6_hyde_black-7_1500x-progressive_c20b660400aa6a1b24268122b9b639af.fit-720w.jpg" alt="plant-thumbnail"></img>
                        <h3>Rose Gold Tulip</h3>
                        <h3>$650</h3>
                </span>

                <span className="shop-link-thumbnail">
                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/1473033/the-sill_potted-plant_fiddle-leaf-fig-6_hyde_black-7_1500x-progressive_c20b660400aa6a1b24268122b9b639af.fit-720w.jpg" alt="plant-thumbnail"></img>
                        <h3>Broomeliad Pineapple</h3>
                        <h3>$195</h3>
                </span>

                <span className="shop-link-thumbnail">
                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/1473033/the-sill_potted-plant_fiddle-leaf-fig-6_hyde_black-7_1500x-progressive_c20b660400aa6a1b24268122b9b639af.fit-720w.jpg" alt="plant-thumbnail"></img>
                        <h3>Bamboo Palm</h3>
                        <h3>$65</h3>
                </span>

                <span className="shop-link-thumbnail">
                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/1473033/the-sill_potted-plant_fiddle-leaf-fig-6_hyde_black-7_1500x-progressive_c20b660400aa6a1b24268122b9b639af.fit-720w.jpg" alt="plant-thumbnail"></img>
                        <h3>Mini Money Tree</h3>
                        <h3>$35</h3>
                </span>
            </div>

        <hr />

            <div className="our-mission">
                <h1>Our Mission</h1>

                {/* <p>We pride ourselves on sourcing on-trend flowers and creating one-of-a-kind arrangements you won't find anywhere else. We work with the best-in-class designers to offer stunning bouquets and curated plants that fit every occasion.</p> */}

                <p>Our mission is to make the experience of discovering the perfect potted plants as wonderful as the plants themselves. Salty Greens is the source that bridges the gap between plants and people, offering products and services that fit with your personal style, your lifestyle, and your budget.</p>

                <img src="https://image.freepik.com/free-photo/happy-woman-examining-plants-greenhouse_23-2147948267.jpg" alt="happy-person"></img>
            </div>
        
        <hr />


        <div className="carousel-parent">
            <h1>#StaySalty #StayGreen</h1>
            <div className="carousel">
                <span className="carousel-img-container">
                    <img className="carousel-img" src="https://i.pinimg.com/564x/46/c4/56/46c4565f4627d2becb6b00f9f9cbec8a.jpg" alt="carousel-img"></img>
                </span>

                <span className="carousel-img-container">
                    <img className="carousel-img" src="https://i.pinimg.com/564x/46/c4/56/46c4565f4627d2becb6b00f9f9cbec8a.jpg" alt="carousel-img"></img>
                </span>

                <span className="carousel-img-container">
                    <img className="carousel-img" src="https://i.pinimg.com/564x/46/c4/56/46c4565f4627d2becb6b00f9f9cbec8a.jpg" alt="carousel-img"></img>
                </span>
            </div>
        </div>
                

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
    )
}

