import React from "react";
import ScrollToTop from "../../App/scrollToTop";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-div" id="footer-top">
        <ul className="footer-links">
          <ScrollToTop />
          <li><Link className='footer-link' to='about' >About</Link></li>
          <li><Link className='footer-link' to='products' >Microgreens</Link></li>
          <li><Link className='footer-link' to='contact' >Contact</Link></li>
        </ul>
        <a href='mailto:neiltsterling@gmail.com' id="email">neiltsterling@gmail.com</a>
      </div>
      <div className="footer-div" id="footer-bottom">
        <p id="copyright">© 2023 All rights Reserved. Design by Tanner Weir</p>
        <p>+1 (650) 868-2806</p>
      </div>
    </footer>
  )
}