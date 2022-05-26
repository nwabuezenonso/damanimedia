import React from 'react';

import { BiMenuAltRight } from 'react-icons/bi'; // on screen
import {IoClose} from 'react-icons/io5'
 import { BsFillCartFill } from 'react-icons/bs'
import { images} from '../../constant';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);  // create a state
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logowhite} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans app__flex"><div className="dots" /><a href="/">Home</a></li>
        <li className="p__opensans app__flex"><div className="dots" /><a href="/about">Wedding stories</a></li>
        <li className="p__opensans app__flex"><div className="dots" /><a href="/menu">Portfolio</a></li>
        <li className="p__opensans app__flex"><div className="dots" /><a href="/awards">Information</a></li>
        <li className="p__opensans app__flex"><div className="dots" /><a href="/contact">Contact</a></li>
        <li className="p__opensans app__flex"><div className="dots" /><a href="/contact">Product</a></li>
      </ul>
      <div className="app__navbar-login">
        <BsFillCartFill />
        <div />
        {/* <a href="/" className="p__monserrat"></a> */}
      </div>
      <div className="app__navbar-smallscreen">
        <BiMenuAltRight color="#fff" fontSize={35} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="/menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="/awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="/contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;