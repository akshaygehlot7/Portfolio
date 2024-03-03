import React, { useState } from "react";
import "../Styles/Navbar.css";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const hideNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          Akshay Gehlot
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" 
              onClick={hideNavbar}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"
               onClick={hideNavbar}
              >About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" 
              onClick={hideNavbar}
              >Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
