import React from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../contexts/DataContext';
import Scissor from '../images/scissors.ico';
import './styles/Nav.scss';

const Navbar = () => {
  const { data, dispatch } = useDataContext();
  console.log(data.activeLink);

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
            <li><Link to='' className="nav-item">Home</Link></li>
            <li><Link to='' className="nav-item">About</Link></li>
            <li><Link to='' className="nav-item">Services</Link></li>
            <li><Link to='' className="nav-item">Portfolio</Link></li>
            <li><Link to='' className="nav-item">Contact</Link></li>
            <li><p onClick={() => dispatch({ type: 'SET_ACTIVE_LINK', payload: 'about'})}>Test</p></li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar