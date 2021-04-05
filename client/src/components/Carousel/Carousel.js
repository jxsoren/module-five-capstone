import React, { useState } from 'react'
import ImageSlide from './ImageSlide'
import Arrow from './Arrow'

import './Carousel.css'

export default function Carousel(){
    const [ imgIndex, setImgIndex] = useState(0)

    const imgUrls = [ 
        'https://i.pinimg.com/474x/11/f3/d3/11f3d3a8a7a63dfaa9241c54d19ba009.jpg',
        "https://i.pinimg.com/474x/c9/fe/62/c9fe628675c52ec3664e83c6cb83745c.jpg",
        'https://i.pinimg.com/474x/d9/03/65/d903652951073b6411eb0c408695b461.jpg',
        'https://i.pinimg.com/474x/f6/7f/69/f67f692cfa3d87f0a73d2b3704746692.jpg',
        'https://i.pinimg.com/474x/37/4b/e8/374be8193b046ff0b5d0d825878ac996.jpg',
        'https://i.pinimg.com/474x/aa/07/5a/aa075ab0130283e4395f6e7c24a994f5.jpg',
        'https://i.pinimg.com/474x/42/bf/00/42bf00efadcf51a35aba545b17056abb.jpg',
        'https://i.pinimg.com/474x/a9/52/eb/a952ebd200d47d365e868d4dd03edfc2.jpg',
        'https://i.pinimg.com/474x/db/86/0e/db860e7485138a2f8d77d147e6443664.jpg',
        'https://i.pinimg.com/474x/8d/f2/6c/8df26c66ee2a4351a99eb5e9cfbb394a.jpg',
        'https://i.pinimg.com/474x/22/a8/29/22a829a62de065290c64caa955d5a3e0.jpg',
        'https://i.pinimg.com/474x/4b/62/3a/4b623a5eecb243c845761d72e97e6a59.jpg',
        'https://i.pinimg.com/474x/39/7c/6d/397c6d0a705694df9e52334a25a47cd5.jpg',
        'https://i.pinimg.com/474x/7f/7c/b3/7f7cb3c5995305febb400f885696df2d.jpg',
        'https://i.pinimg.com/474x/16/23/9c/16239cd6c25efd3a330b07920a3cf8a2.jpg',
        'https://i.pinimg.com/474x/05/da/e0/05dae041d6b4863096a7a198e0c3d745.jpg',
        'https://i.pinimg.com/474x/bb/78/78/bb7878dd1faac5e372889a7ced2c20a7.jpg'
    ]
    
        const previousSlide = () => {
            const lastIndex = imgUrls.length -1
            const resetIndex = setImgIndex(0)
            const index = resetIndex ? lastIndex : imgIndex - 1
            setImgIndex(index)
            console.log('previous-slide')
        }

        const nextSlide = () => {
            const lastIndex = imgUrls.length -1
            const resetIndex = setImgIndex(lastIndex)
            const index = resetIndex ? lastIndex : imgIndex + 1
            setImgIndex(index)
            console.log('next-slide')
        }

    return(
        <div className="carousel">
            <Arrow 
                direction="left"
                clickFunction={ previousSlide }
                glyph="&#9664;"
            />

            <ImageSlide url={ imgUrls[imgIndex] }/>

            <Arrow  
                direction="right"
                clickFunction={ nextSlide }
                glyph="&#9654;"
            />
        </div>
    )
}