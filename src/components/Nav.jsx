import React from 'react';
import { Link } from 'react-router-dom';
import Scissor from '../images/scissors.ico';
import './styles/Nav.scss'



const Navbar = () => {
  return (
      <header id="header">
        <div className="logo-container">
          <img className='scissor' src={Scissor} alt="scissor" />
          <h4 className='header-text'>Exquisite Couture</h4>
        </div>
        <div className="menu-bars">

        </div>
        <nav>

        </nav>
      </header>
  )
}

export default Navbar