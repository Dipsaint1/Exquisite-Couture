import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Scissor from '../images/scissors.ico'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(prev => !prev);
  const closeMobileMenu = () => setClick(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Change navbar color if scrolled vertically
  useEffect(() => {
    const navbarScroll = () => {
      if(window.scrollY > 5) setIsScrolled(true);
      else setIsScrolled(false);
    }

    window.addEventListener('scroll', navbarScroll);

  
    return () => window.removeEventListener('scroll', navbarScroll)
  }, []);
  

  return (
    <>
      
      <nav style={isScrolled ? {position: 'sticky', top: '0', backgroundImage: 'linear-gradient(to left top, #deb779, #ae8060, #765147, #3c2a2a, #000000)'} : {position: 'relative', backgroundImage: 'linear-gradient(to right bottom, #000000, #3c2a2a, #765147, #ae8060, #deb779)'}} className="navbar">
        <div className="navbar-container container-fluid">
          <div style={isScrolled ? {color: 'black'} : {color: '#deb779'}} className='logo-container'>
            <img src={Scissor} alt="" className='scissor' />
            <Link  style={isScrolled ? {color: 'black'} : {color: '#deb779'}} to="/" className="navbar-logo" onClick={closeMobileMenu}> EXQUISITE </Link>
          </div>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link onClick={closeMobileMenu} to="/" className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMobileMenu} to="/about" className="nav-links">About</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMobileMenu} to="/services" className="nav-links">Services</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMobileMenu} to="/contact" className="nav-links">Contact</Link>
            </li>
          </ul>

          <div className="menu-icon">
            <i onClick={handleClick} className={click ? "fa fa-times" : "fa fa-bars"} ></i>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;