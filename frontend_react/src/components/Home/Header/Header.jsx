import React from 'react';

import { AppWrap, MotionWrap } from '../../../wrapper';
import { SubHeading } from '../../../miniComponent';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Capture every moment" />
      <h1 className="app__header-h1">Breach the Gap between your Imagination and Reality</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>our goal is to craft beautiful images that are just as unique as the people in the photographs.</p>
      <button type="button" className="custom__button">Explore</button>
    </div>

    <div className="app__wrapper_img">

    </div>
  </div>
);

export default AppWrap(MotionWrap(Header), 'header');