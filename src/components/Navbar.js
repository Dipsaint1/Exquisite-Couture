import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(prev => !prev);
  const closeMobileMenu = () => setClick(false);

  return (
  <>
    <nav className="navbar">
      <div className="navbar-container container-fluid">
        <div className='logo-container'>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EXQUISITE <i className="fa fa-leaf" aria-hidden="true"></i>
          </Link>
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