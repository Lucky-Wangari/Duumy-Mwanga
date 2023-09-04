import React from "react";
import logo from '../../assets/images/logo.png';
import './style.css';
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";


const Footer = () =>{
    return(
        <>
        <section className="footer">
             <div className="footer-container">
                <div >
                     <img className="logo" src={logo} alt="" />
                </div>
                <div className="footer-links">
                      <a href="#home">Home</a>
                     <a href="#">What We Do</a>
                     <a href="#s">Solutions</a>
                </div> 
                <div className="footer-contacts">
                      <a href="#contacts">Contacts</a>
                </div>
            </div>
            <div className="icons">
              <AiFillLinkedin />
              < AiOutlineMail />
              < BsTelephone />
            </div>
            <div className="footer-reserved">
             <p>All Rights Reserved</p>
            </div> 
        </section>
        </>
    )
}
export default Footer;