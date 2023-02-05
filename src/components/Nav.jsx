import React from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../contexts/DataContext';
import Scissor from '../images/scissors.ico';
import './styles/Nav.scss';

const Navbar = () => {
  const { data, dispatch } = useDataContext();
  const { activeLink } = data;

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
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'home'})} to='' className={activeLink === 'home' ? 'nav-item active' : 'nav-item'}>Home</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'about'})} to='' className={activeLink === 'about' ? 'nav-item active' : 'nav-item'}>About</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'services'})} to='' className={activeLink === 'services' ? 'nav-item active' : 'nav-item'}>Services</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'portfolio'})} to='' className={activeLink === 'portfolio' ? 'nav-item active' : 'nav-item'}>Portfolio</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'contact'})} to='' className={activeLink === 'contact' ? 'nav-item active' : 'nav-item'}>Contact</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar