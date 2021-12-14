import React, {useState} from 'react';
import { ImageData } from './ImageData';


const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    //const length = slides.length


}

export const ImageSlide = () => {
    return (
        <>
        <div>
            {ImageData.map((slide, index) => { 
               return (
                <img src={slide.image} alt="travel image" />
               )
            })}
        </div>
        </>
    )
}
