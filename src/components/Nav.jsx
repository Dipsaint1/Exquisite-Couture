import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../contexts/DataContext';
import Scissor from '../images/scissors.ico';
import './styles/Nav.scss';

const Navbar = () => {
  const { data, dispatch } = useDataContext();
  const [toggleMenu, setIsToggleMenu] = useState(false);
  const { activeLink } = data;

  const ToggleMenu = () => { setIsToggleMenu(prevMenu => !prevMenu) }

  return (
      <header id="header">
        <div className="logo-container">
          <img className='scissor' src={Scissor} alt="scissor" />
          <h4 className='header-text'>Exquisite <span>Couture</span></h4>
          <div className="menu-bars-container">
          <div onClick={ToggleMenu} className="menu-bars">
            <span className={toggleMenu === false ? 'bar' : 'bar top-bar'}></span>
            <span className={toggleMenu === false ? 'bar' : 'bar middle-bar'}></span>
            <span className={toggleMenu === false ? 'bar' : 'bar bottom-bar'}></span>
          </div>
        </div>
        </div>
        {toggleMenu && <nav>
          <ul>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'home'})} to='' className={activeLink === 'home' ? 'nav-item active' : 'nav-item'}>Home</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'about'})} to='' className={activeLink === 'about' ? 'nav-item active' : 'nav-item'}>About</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'services'})} to='' className={activeLink === 'services' ? 'nav-item active' : 'nav-item'}>Services</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'portfolio'})} to='' className={activeLink === 'portfolio' ? 'nav-item active' : 'nav-item'}>Portfolio</Link></li>
            <li><Link onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'contact'})} to='' className={activeLink === 'contact' ? 'nav-item active' : 'nav-item'}>Contact</Link></li>
          </ul>
        </nav>}
      </header>
  )
}

export default Navbar