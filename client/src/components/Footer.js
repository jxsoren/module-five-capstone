import React, { useContext } from "react"
import { PlantContext } from '../plantContext'


export default function Footer(){
    const c = useContext(PlantContext)
    return(
    <>
        <hr className="footer-hr"></hr>
        <div className="footer">
            <span className="footer-area-1">
                <p>About Us</p>
                <p>FAQs</p>
                <p>Terms</p>
            </span>

            <span className="footer-area-2">
                <h3>Join Our Weekly Newsletter!</h3>
                <form>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        onChange={c.handleChange}
                        value={c.email}
                    />
                    <button onClick={c.handleEmailSubmit}>Submit</button>
                </form>

                <p>Follow Us!</p>

                <ul className="icons">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 11.52 22.41">
                        <title>Facebook icon</title>
                        <path class="cls-2" d="M7.33,21.41H3.11V11.21H1V7.69H3.11V5.58C3.11,2.71,4.3,1,7.69,1H10.5V4.52H8.74c-1.31,0-1.4.49-1.4,1.41V7.69h3.19l-.37,3.52H7.33Z"></path>
                    </svg>
                    </li>
    
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" height="21">
                            <title>Twitter icon</title>
                            <path class="cls-2" d="M21.68,2.59a9.11,9.11,0,0,1-2.54.7A4.47,4.47,0,0,0,21.08.84a8.53,8.53,0,0,1-2.81,1.07,4.42,4.42,0,0,0-7.64,3,4.88,4.88,0,0,0,.11,1,12.55,12.55,0,0,1-9.1-4.62A4.29,4.29,0,0,0,1,3.55,4.43,4.43,0,0,0,3,7.23a4.4,4.4,0,0,1-2-.55v.05a4.41,4.41,0,0,0,3.55,4.33,4.13,4.13,0,0,1-1.17.16,4.58,4.58,0,0,1-.83-.08,4.42,4.42,0,0,0,4.13,3.07A8.9,8.9,0,0,1,1.19,16.1a9,9,0,0,1-1-.06,12.5,12.5,0,0,0,6.77,2A12.49,12.49,0,0,0,19.48,5.45c0-.19,0-.38,0-.57a9.25,9.25,0,0,0,2.21-2.29"></path>
                        </svg>
                    </li>
    
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.69 20.69" height="21">
                            <title>Instagram icon</title>
                    
                            <path class="cls-2" d="M10.34,2.68c2.5,0,2.79,0,3.78.06a5,5,0,0,1,1.73.32,2.88,2.88,0,0,1,1.08.7,2.92,2.92,0,0,1,.7,1.07A5.14,5.14,0,0,1,18,6.57c0,1,.05,1.28.05,3.77s0,2.79-.05,3.78a5,5,0,0,1-.32,1.73,3.08,3.08,0,0,1-1.78,1.78,5,5,0,0,1-1.73.32c-1,0-1.28.05-3.78.05S7.55,18,6.57,18a5.14,5.14,0,0,1-1.74-.32,2.92,2.92,0,0,1-1.07-.7,2.88,2.88,0,0,1-.7-1.08,5,5,0,0,1-.32-1.73c-.05-1-.06-1.28-.06-3.78s0-2.79.06-3.77a5.14,5.14,0,0,1,.32-1.74,2.92,2.92,0,0,1,.7-1.07,2.92,2.92,0,0,1,1.07-.7,5.14,5.14,0,0,1,1.74-.32c1-.05,1.28-.06,3.77-.06m0-1.68c-2.53,0-2.85,0-3.85.06a6.83,6.83,0,0,0-2.27.43A4.62,4.62,0,0,0,2.57,2.57,4.62,4.62,0,0,0,1.49,4.22a6.83,6.83,0,0,0-.43,2.27C1,7.49,1,7.81,1,10.34s0,2.86.06,3.86a6.71,6.71,0,0,0,.43,2.26,4.57,4.57,0,0,0,1.08,1.66A4.62,4.62,0,0,0,4.22,19.2a6.83,6.83,0,0,0,2.27.43c1,.05,1.32.06,3.85.06s2.86,0,3.86-.06a6.71,6.71,0,0,0,2.26-.43,4.78,4.78,0,0,0,2.74-2.74,6.71,6.71,0,0,0,.43-2.26c.05-1,.06-1.32.06-3.86s0-2.85-.06-3.85a6.83,6.83,0,0,0-.43-2.27,4.62,4.62,0,0,0-1.08-1.65,4.57,4.57,0,0,0-1.66-1.08,6.71,6.71,0,0,0-2.26-.43C13.2,1,12.88,1,10.34,1"></path>
                            <path class="cls-2" d="M10.34,5.55a4.8,4.8,0,1,0,4.8,4.79,4.78,4.78,0,0,0-4.8-4.79m0,7.91a3.12,3.12,0,1,1,3.12-3.12,3.12,3.12,0,0,1-3.12,3.12"></path>
                            <path class="cls-2" d="M16.45,5.36a1.12,1.12,0,1,1-1.12-1.13,1.12,1.12,0,0,1,1.12,1.13"></path>
                        </svg>
                    </li>
    
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.54 20.69" height="21">
                            <title>Pinterest icon</title>
                            <path class="cls-2" d="M7,13.36c-.49,2.57-1.09,5-2.86,6.33-.55-3.89.81-6.81,1.43-9.91C4.47,8,5.67,4.35,7.93,5.24c2.78,1.1-2.41,6.7,1.08,7.4s5.12-6.3,2.86-8.59C8.61.74,2.39,4,3.16,8.7c.18,1.16,1.38,1.51.47,3.11C1.55,11.35.93,9.7,1,7.51A7,7,0,0,1,7.33,1.06C11.26.62,14.94,2.5,15.45,6.2c.58,4.17-1.77,8.68-6,8.35C8.34,14.47,7.87,13.9,7,13.36"></path>
                        </svg>
                    </li> 
            </ul>

            
                <p>Copyright © 2021 Salty Greens Inc.</p>
            </span>

            <span className="footer-area-3">
                <p>Shipping</p>
                <p>Contact</p>
                <p>Membership</p>
            </span>

        </div>
    </>
    )
}