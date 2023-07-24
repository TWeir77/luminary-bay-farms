import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="home-button">
        <NavLink
          to='/'
          className='home-icon'
        ><img src='/images/logo-white.png' /> Luminary Bay<br />Farms </NavLink>
      </div>
      <div className="nav">
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