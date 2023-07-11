import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li><Link to='about'>About</Link></li>
        <li><Link to='products'>Micro Greens</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </ul>
    </footer>
  )
}