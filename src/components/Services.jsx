import React, { useState } from 'react';
import { faFemale, faBolt, faThumbsUp, faScissors, faThumbTack, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../sass/services.scss';
import Service from '../components/utils/service.json'

const Services = () => {
  const [isHover, setIsHover] = useState(false);
  const icons = [ faFemale, faBolt, faThumbsUp, faScissors, faThumbTack, faFireExtinguisher ];

  const mouseOver = (e) => {
    console.dir(e.target.children[0]);
    e.target.children[0].style.backgroundColor = '#fff';
    e.target.children[1].style.color = '#fff';
    e.target.children[2].style.color = '#fff';
    e.target.children[3].style.color = '#fff';
  }

  const mouseOut = (e) => {
    e.target.children[0].style.backgroundColor = 'inherit';
    e.target.children[1].style.color = '#ffb900';
    e.target.children[2].style.color = '#b4afaf';
    e.target.children[3].style.color = '#808489';
  } 

  return (
    <section id='services'>
      <div className="container">

        <h2 className="title">What We <span>Do</span></h2>

        <main>
          {
            Service.map(item => {
              return(
                <div key={item.id} onMouseEnter={mouseOver} onMouseLeave={mouseOut}  className="content-wrapper">
                  <div style={{
                    backgroundColor:'inherit',
                    transition: '1.5s ease-in-out'
                    }} className="icon-wrapper">
                    <FontAwesomeIcon style={{ color:'red' }} className='icon' icon={icons[item.id]} />
                  </div>
                  <h5>{item.header}</h5>
                  {/* <span style={{backgroundColor: isHover? '#fff': '#b4afaf'}}></span> */}
                  <span style={{backgroundColor:'#b4afaf'}}></span>
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