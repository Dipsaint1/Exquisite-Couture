import React, {useState, useEffect} from 'react';
import "./Carousel.css";
import image1 from "../../images/image1.jpg";
import image5 from "../../images/image5.jpg";
import image2 from "../../images/image2.jpg";
import image8 from "../../images/Image8.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image5, image8];
  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
    }, 5000);
  
    return () => {clearInterval(slideInterval)}
  }, []);
  
  return (
    <div className="slider">
      {slides.map((slide, index) => {
        return(
          <div
            style={{transform: `translateX(${- currentSlide * 100}%)`, transition: "all ease 0.45s"}}
            key={index} className="slide">
            <div className="slide-item">
              <img src={slide} alt="slide" />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Carousel;