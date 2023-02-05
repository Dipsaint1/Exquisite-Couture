import React from 'react';
import './styles/Herosection.scss';
import Carousel from "./carousel/Carousel";

function HeroSection() {
  return (
    <div className='hero-section'>
      <Carousel />

      <main id='main'>
        <h1>Your Personal Tailor For Unique People Only</h1>
        <h2>Welcome to <span>Exquisite Couture</span></h2>
        <span></span>
        <h4>Why Custom Tailoring</h4>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s but also the leap into electronic typesetting dolor amet.
            Integer laoreet ultricies nunc, vitae eleifend elit rutrum sit amet. In elementum, magna id pellentesque auctor, risus dolor congue urna, nec dapibus eros magna a odio. Duis laoreet risus eget malesuada consequat. Nunc et tortor dignissim, laoreet est eget
        </p>
      </main>
    </div>
  )
}

export default HeroSection;