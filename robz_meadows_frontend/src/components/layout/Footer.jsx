import React from 'react';
import '../../assets/css/landingPage/landingPage.css';
import image from '../../images/image.png';
import '../../'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={image} alt="Building" />
            </div>
            <div className="footer-text">
              <h3>Drive in Style. Live in Comfort.</h3>
              <p>Explore premium car rentals, trusted vehicle sales, and quality apartments — all in one place.</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-info">
              <div className="info-pages">
                <a href=''>About Us</a>
                <a href=''>Cars for Rent</a>
                <a href=''>Cars for Sale</a>
                <a href=''>Apartments</a>
              </div>
              <div className="info-item">
                <p>informationrobz@gmail.com</p>
                <p>+250247369</p>
                <p>kigali.rwanda@238 st</p>
                <div className="social-icons">
                  <span>Instagram</span>
                  <span>Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;