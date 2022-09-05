import React,{ useState } from 'react';
import "./image-slider.scss"

export default function ImageSlider({slider}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    } 

    const goToNext = () => {
        const isLastSlide = currentIndex === slider.length - 5;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    } 


        setTimeout(goToNext, 3000);
  return (
    <div className="image-slider">
        <div 
            className="image-slider__current "
            >
                <img src={slider[currentIndex].img} alt="Scooter" />
        </div>
    </div>
  )
}
