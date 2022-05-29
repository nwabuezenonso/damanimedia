import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import { BiMenuAltRight } from 'react-icons/bi'; // on screen
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
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
        <Link to="/" className="p__opensans app__flex link"  ><div className="dots" />Home</Link>
        <Link to="/portfolio" className="p__opensans app__flex link"><div className="dots" />Portfolio</Link>
        <Link to="/about" className="p__opensans app__flex link" ><div className="dots" />Information</Link>
        <Link to="/contact" className="p__opensans app__flex link"><div className="dots" />Contact</Link>
        <Link to="/product" className="p__opensans app__flex link" ><div className="dots" />Product</Link>
      </ul>     
      <div className="app__navbar-login">       
        <Link to="/"><BsFillCartFill /></Link>
        <Link to="/"><FiFacebook /></Link>
        <Link to="/"><FiTwitter /></Link>
        <Link to="/"><FiInstagram /></Link>
      </div>
      <div className="app__navbar-smallscreen">
        <BiMenuAltRight color="#fff" fontSize={35} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <Link className='small_link' to="/" onClick={() => setToggleMenu(false)}><li>Home</li></Link>
              <Link className='small_link' to="/portfolio" onClick={() => setToggleMenu(false)}><li>Portfolio</li></Link>
              <Link className='small_link' to="/about" onClick={() => setToggleMenu(false)}><li>Information</li></Link>
              <Link className='small_link' to="/contact" onClick={() => setToggleMenu(false)}><li>Contact</li></Link>
              <Link className='small_link' to="/product" onClick={() => setToggleMenu(false)}><li>Product</li></Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;