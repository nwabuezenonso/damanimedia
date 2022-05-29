import React from 'react';

import { images } from '../../../constant';
import './About.css';
import { RiDoubleQuotesL } from 'react-icons/ri'
import { AppWrap, MotionWrap } from '../../../wrapper';

const About = () => {

  return (
    <>
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant">About</h1>
          {/* <SubHeading title="" /> */}
          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <RiDoubleQuotesL  style={{fontSize:"50px", margin: "2rem 0 2rem 0"}}/>
              <p className="p__opensans" style={{color: "#000", margin: "2rem 0 2rem 0"}}>Based in Nigeria, Available Worldwide</p>
            </div>
            <p className="p__opensans" style={{width: "100%", color: "#000"}}>Damani’s Media is a team of photographers, who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. By doing so, we create images that stand out in today’s highly competitive wedding market. Ultimately, our goal is to craft beautiful images that are just as unique as the people in the photographs.</p>
          </div>

          <div className="app__chef-sign">
            <img src={images.logo} alt="sign_image" />
          </div>
        </div>
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.header01} alt="chef_image" />
        </div>
      </div>
    </>
  )


};

export default AppWrap(MotionWrap(About), 'about');