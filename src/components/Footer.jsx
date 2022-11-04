import React from "react";
import zuri from "../img/zuri.png";
import zuriimpress from "../img/zuri-ingressive-img.png";

const Footer = () => {
  return (
    <div className="footer"> 
      <div className="footer-content">
        <img src={zuri} alt="zuri" className="footer__logo" />
        <p className="footer-text">
          HNG Internship 9 Frontend Task
        </p>
        <img src={zuriimpress} alt="zuriimpress" className="zuriimpress" />
      </div>
    </div>
  );
};

export default Footer;
