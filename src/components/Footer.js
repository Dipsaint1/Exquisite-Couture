import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";


function Footer() {

  const date = new Date().getFullYear();
  // const d = date.getFullYear();

  return (
    <section id="footer">
      <div className='footer-links'>
        <Link to="/"><span> Facebook </span> </Link>
        <Link to="/"><span> Twitter </span> </Link>
        <Link to="/"><span> Instagram </span> </Link>
        <Link to="/"><span> TikTok </span> </Link>
      </div>

      <div className="footer-copyright">
        <strong>Copyright {date}. Exquisite Couture</strong>
      </div>
    </section>
  )
}

export default Footer