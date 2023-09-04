import React from 'react';
import './style.css';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
    <header>
     <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-links">
          <img src={logo} alt="" />
          <li><a href="#">Home</a></li>
          <li><a href="#">What We Do</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
    </nav>
    </header>
    </>
  ); 
}

export default Navbar;
