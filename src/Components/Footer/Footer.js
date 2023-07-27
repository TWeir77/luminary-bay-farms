import React from "react";
import ScrollToTop from "../../App/scrollToTop";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <ul>
        <ScrollToTop />
        <li><Link className='footer-link' to='about' >About</Link></li>
        <li><Link className='footer-link' to='products' >Microgreens</Link></li>
        <li><Link className='footer-link' to='contact' >Contact</Link></li>
      </ul>
      <p>© 2023 All rights Reserved. Design by Tanner Weir</p>
    </footer>
  )
}