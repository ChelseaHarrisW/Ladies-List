import React, {useState} from 'react';
import { ImageData } from './ImageData';
import './imageSlide.css'

const ImageSlider = ({slides}) => {

}

export const ImageSlide = () => {
    return (
        <section className="slider">
            <div className="click-left" />
            <div className="click-right" />
        <div>
            {ImageData.map((slide, index) => { 
               return (
                <img src={slide.image} alt="slides" />
               )
            })}
        </div>
        </section>
    )
}

// export const ImageSlide = (slides) => {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=First slide&bg=373940"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
  
//   render(<ControlledCarousel />);