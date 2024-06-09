import React from 'react'
import "./Footer.css"
import frame from "../images/Frame.png"
import group56 from "../images/Group 1000002356.png"
import start from "../images/Star 1.png"
import logo from "../images/logo.png"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="upper-frame">
        <img className='group' src={group56} alt="" />
        <img className='start' src={start} alt="" />
        <img className='frame' src={frame} alt="" />
      </div>
      <div className="footer-container">
            <div className="footer-column logo-column">
                <img src={logo} alt="Uifry Logo" className="logo"/>
                <p className="contact-info"><span><MdEmail /></span>Help@Frybix.Com</p>
                <p className="contact-info"><span><FaPhoneAlt /></span>+1234 456 678 89</p>
            </div>
            <div className="footer-column">
                <h3>Links</h3>
                <ul>
                    <li><a to="#">Home</a></li>
                    <li><a to="#">About Us</a></li>
                    <li><a to="#">Bookings</a></li>
                    <li><a to="#">Blog</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Legal</h3>
                <ul>
                    <li><a to="#">Terms Of Use</a></li>
                    <li><a to="#">Privacy Policy</a></li>
                    <li><a to="#">Cookie Policy</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Product</h3>
                <ul>
                    <li><a to="#">Take Tour</a></li>
                    <li><a to="#">Live Chat</a></li>
                    <li><a to="#">Reviews</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Newsletter</h3>
                <p>Stay Up To Date</p>
                <form action="#" method="post">
                    <input type="email" placeholder="Your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; Copyright 2022 Uifry.Com All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
