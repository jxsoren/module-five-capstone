import React from 'react'
import './Ref.css'

export default function Ref(props){
    return(
        <div className="ref">
            <h2>Invite a Friend, Save $20!</h2>
            <h3>Once a friend makes their first $50+ purchase with your personal referral link, you’ll get $20 off your next online order. Sign up to get your link here!</h3>
            <form>
                <input 
                    className="ref-names"
                    name="first-last"
                    placeholder="Your First and Last Name"
                    type="text"
                />
                <input 
                    className="ref-email"
                    name="email"
                    placeholder="Your Email Adress"
                    type="email"
                />
                <button
                    className="ref-btn"
                    name="ref-btn"
                    onClick={props.handleRefSubmit}
                >Submit</button>
            </form>
        </div>
    )
}