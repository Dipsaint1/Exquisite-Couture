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
        <div className="menu-bars-container">
          <div className="menu-bars">
            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </div>
        </div>
        <nav>
          <ul>
            <Link to='' className="nav-item">Home</Link>
            <Link to='' className="nav-item">About</Link>
            <Link to='' className="nav-item">Services</Link>
            <Link to='' className="nav-item">Portfolio</Link>
            <Link to='' className="nav-item">Contact</Link>
            <p className="nav-item phone">08162845828</p>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar