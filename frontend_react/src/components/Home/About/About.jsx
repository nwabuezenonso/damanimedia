import React from 'react';

import { SubHeading } from '../../../miniComponent';
import { images } from '../../../constant';
import './About.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.header11} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What we believe in</h1>
      <SubHeading title="Chef's word" />

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans" style={{color: '#030303'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans" style={{color: '#030303'}}> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <img src="" alt="damani logo" />
      </div>
    </div>
  </div>
);

export default Chef;