import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { ImCamera } from 'react-icons/im'
import { images } from '../../constant';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans" style={{color: "#000"}}>&quot;Breaching The Gap Between Your Imagination And Reality&quot;</p>
        <ImCamera />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright © 2022 Damanis Media.</p>
    </div>

  </div>
);

export default Footer;
