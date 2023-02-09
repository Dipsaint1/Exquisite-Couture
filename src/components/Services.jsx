import React, { useState } from 'react';
import { faFemale, faBolt, faThumbsUp, faScissors, faThumbTack, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../sass/services.scss';
import Service from '../components/utils/service.json'

const Services = () => {
  const [isHover, setIsHover] = useState(false);
  const icons = [ faFemale, faBolt, faThumbsUp, faScissors, faThumbTack, faFireExtinguisher ];

  return (
    <section id='services'>
      <div className="container">

        <h2 className="title">What We <span>Do</span></h2>

        <main>
          {
            Service.map(item => {
              return(
                <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}  className="content-wrapper">
                  <div style={{
                    backgroundColor: isHover? '#fff': 'inherit',
                    transition: isHover? '1.5s ease-in-out': '0s'
                    }} class className="icon-wrapper">
                    <FontAwesomeIcon style={{ color: 'red' }} className='icon' icon={icons[item.id]} />
                  </div>
                  <h5>{item.header}</h5>
                  <span style={{backgroundColor: isHover? '#fff': '#b4afaf'}}></span>
                  <p style={{color: isHover? '#fff': '#808489'}}>{item.text}</p>
                </div>
              )
            })
          }
        </main>
      </div>
    </section>
  )
}

export default Services