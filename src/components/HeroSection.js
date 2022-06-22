import React from 'react';
import './HeroSection.css';
import Button from "./utils/Button";
import video from "../videos/video.mp4";
import img from "../images/man-custom-suit.jpg";



function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero-image" src={img} alt="" />
      <video src={video} autoPlay muted loop></video>
      <div className="hero-information">
        <h1 className="hero-header">Cutting and Tailoring</h1>
        <p className="hero-text">Each shirt isi cut individually in order to match the pattern of the fabric from yoke to sleeve as well as at the sleeve plackets</p>
      </div>
      <div className='hero-footer'>
        <span> Facebook </span>
        <span> Twitter </span>
        <span> Instagram </span>
        <span> TikTok </span>
      </div>
    </div>
  )
}

export default HeroSection;