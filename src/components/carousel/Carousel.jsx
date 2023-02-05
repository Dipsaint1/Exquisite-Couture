import React, {useState, useEffect} from 'react';
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
  const slides = [image1, image2, image3, image4];
  
  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
  //   }, 5000);
  
  //   return () => {clearInterval(slideInterval)}
  // }, []);

  return(
    <main id='carousel'>
      <div className="left-arrow">
        <p><FontAwesomeIcon className='arrow left' icon={faChevronLeft} /></p>
      </div>
      <div className="right-arrow">
        <p><FontAwesomeIcon className='arrow right' icon={faChevronRight} /></p>
      </div>
      <div className="slide-wrapper">
        
        <div className="slide" style={
          { 
            background: `-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(${slides[currentSlide]}) no-repeat`,
            backgroundSize: 'cover',
            transition: 'all 2s ease-in-out'
          }}>
          <h2>Your Design, We <span>Deliver</span></h2>
          <p>Suit Resizing</p>
        </div>
        <div className='slide' style={
          { 
            background: `-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(${slides[currentSlide]}) no-repeat`,
            backgroundSize: 'cover'
          }}>
          <h2>Your Design, We <span>Deliver</span></h2>
          <p>Suit Resizing</p>
        </div>
        <div className='slide' style={
          { 
            background: `-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(${slides[currentSlide]}) no-repeat`,
            backgroundSize: 'cover'
          }}>
          <h2>Your Design, We <span>Deliver</span></h2>
          <p>Suit Resizing</p>
        </div>
        <div className='slide' style={
          { 
            background: `-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(${slides[currentSlide]}) no-repeat`,
            backgroundSize: 'cover'
          }}>
          <h2>Your Design, We <span>Deliver</span></h2>
          <p>Suit Resizing</p>
        </div>
      </div>
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