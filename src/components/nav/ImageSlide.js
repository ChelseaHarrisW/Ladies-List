import React from 'react';
import { ImageData } from './ImageData';

export const ImageSlide = () => {
    return (
        <div>
            {ImageData.map((slide, index) => { 
               return (
                <img src={slide.image} alt="travel image" />
               )
            })}
        </div>
    )
}
