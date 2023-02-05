import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Herosection.scss';
import Button from "./utils/Button";
import Carousel from "./carousel/Carousel";

function HeroSection() {
  return (
    <div className='hero-section'>
      <Carousel />
    </div>
  )
}

export default HeroSection;