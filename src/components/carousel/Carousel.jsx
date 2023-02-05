import React, { useState } from 'react';
import "../../sass/carousel.scss";
import image1 from "../../images/banner1.jpg";
import image2 from "../../images/banner2.jpg";
import image3 from "../../images/banner3.jpg";
import image4 from "../../images/banner4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slides from '../hero.json';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3, image4];
  
  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
  //   }, 5000);
  
  //   return () => {clearInterval(slideInterval)}
  // }, []);

  const nextSlide = () => { 
    if( currentSlide === 3 ) setCurrentSlide(3);
    else setCurrentSlide( curr => curr + 1 );
  }
  const previousSlide = () => { 
    if(currentSlide === 0) setCurrentSlide(0);
    else setCurrentSlide(curr => curr - 1) 
  }

  return(
    <main id='carousel'>
      <div className="left-arrow">
        <p onClick={previousSlide}><FontAwesomeIcon className='arrow left' icon={faChevronLeft} /></p>
      </div>
      <div className="right-arrow">
        <p onClick={nextSlide}><FontAwesomeIcon className='arrow right' icon={faChevronRight} /></p>
      </div>
      <div className="slide-wrapper">
        {
          Slides.map(slide => {
            return(
              <div key={slide.id} className="slide" style={
                { 
                  background: `-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(${images[slide.id]})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  transform: currentSlide < 0 ? '0s': `translateX(${-currentSlide * 100}%)`,
                  transition: 'all 2s ease-out',
                }}>
                  <h2>{slide.title}<span>{slide.span}</span></h2>
                  <p>{slide.text}</p>
              </div>
            );
          })
        }
      </div>
      {/* <div className="slide-wrapper">
        {
          slides.map((slide) => {
            console.log(slide.image);
            return(
              <div key={slide.id} className="slide" style={
                { 
                  background: `-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(${slide.image}) no-repeat`,
                  backgroundSize: 'cover',
                  transition: 'all 2s ease-in-out'
                }}>
                  <h2>{slide.title}<span>{slide.span}</span></h2>
                  <p>{slide.text}</p>
              </div>
            );
          })
        }
      </div> */}
      <div className="circles-container">
        <span onClick={() => setCurrentSlide(0)} className={currentSlide===0 ? 'circle active-circle' : 'circle'}></span>
        <span onClick={() => setCurrentSlide(1)} className={currentSlide===1 ? 'circle active-circle' : 'circle'}></span>
        <span onClick={() => setCurrentSlide(2)} className={currentSlide===2 ? 'circle active-circle' : 'circle'}></span>
        <span onClick={() => setCurrentSlide(3)} className={currentSlide===3 ? 'circle active-circle' : 'circle'}></span>
      </div>
    </main>
    
  )
  
  // return (
  //   <div className="slider">
  //     {slides.map((slide, index) => {
  //       return(
  //         <div
  //           style={{transform: `translateX(${- currentSlide * 100}%)`, transition: "all ease 0.45s"}}
  //           key={index} className="slide">
  //           <div className="slide-item">
  //             <img src={slide} alt="slide" />
  //           </div>
  //         </div>
  //       )
  //     })}
  //   </div>
  // );
}

export default Carousel;