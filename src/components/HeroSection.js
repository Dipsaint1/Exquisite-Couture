import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Button from "./utils/Button";
// import video from "../videos/video.mp4";
import img from "../images/man-custom-suit.jpg";


function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero-image" src={img} alt="" />
      {/* <video src={video} autoPlay muted loop></video> */}
      <div className="hero-information">
        <h1 className="hero-header">Cutting <br/> <span> & Tailoring</span></h1>
        <div className="hero-text-container">
          <p className="hero-text">Each shirt is cut individually in order to match the pattern of the fabric from yoke to sleeve as well as at the sleeve plackets</p>
          <Link to="#" className="hero-text-btn">
            <Button>View More</Button>
          </Link>
        </div>
      </div>
      <div className='hero-footer'>
        <Link to="#"><span> Facebook </span> </Link>
        <Link to="#"><span> Twitter </span> </Link>
        <Link to="#"><span> Instagram </span> </Link>
        <Link to="#"><span> TikTok </span> </Link>
      </div>
    </div>
  )
}

export default HeroSection;