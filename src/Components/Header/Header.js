import React from "react";
import ScrollToTop from "../../App/scrollToTop";
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="home-button">
        <NavLink
          to='/'
          className='home-icon'
        ><img src='/images/logo-white.png' alt="logo"/> Luminary Bay<br />Farms </NavLink>
      </div>
      <div className="nav">
        <ScrollToTop />
        <NavLink
          to="products"
          className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}
        > Microgreens </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}
        > About </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}
        > Contact </NavLink>
      </div>
    </div>
  )
}