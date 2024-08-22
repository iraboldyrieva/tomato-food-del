import React from "react";
import { assets } from "../../assets/assets";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, veritatis ea? Voluptas sed debitis cumque assumenda
            ratione deleniti aut ex possimus quod est, maxime minima
            necessitatibus, iure deserunt eaque illo!
          </p>
          <div className="footer-socials-icons">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Pravicy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-354-607-7900</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
