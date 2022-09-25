import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About LEAP Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>LEAPPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>LEAP</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries USA - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2021-2022 LEAP</p>
      </div>
    </div>
  );
}

export default Footer;
