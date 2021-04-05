import React from 'react'
import './Carousel.css'

export default function ImageSlide(props){
    const styles = {
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return(
        <div className="image-slide" style={styles}>
            
        </div>
    )
}