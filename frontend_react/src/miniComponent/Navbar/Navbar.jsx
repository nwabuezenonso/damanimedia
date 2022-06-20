import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {images} from '../../constant';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);  // create a state
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <NavLink to="/"><li className="linkText">Home</li></NavLink>
        <NavLink to="/weddingstories"><li className="linkText"><a href="/weddingstories">Wedding Stories</a></li></NavLink>
        <a  target="_blank"  rel='noreferrer' href="https://paystack.shop/damanimedia">Store</a>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiFillCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <NavLink to="/" className="links" onClick={() => setToggleMenu(false)}>Home</NavLink>
              <NavLink to="/weddingstories" className="links" onClick={() => setToggleMenu(false)}>WeddingStories</NavLink>
              <a  target="_blank" rel='noreferrer' href="https://paystack.shop/damanimedia" className="links" onClick={() => setToggleMenu(false)}>Products</a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;