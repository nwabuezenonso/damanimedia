import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { images } from '../../constant';

import './About.css';

const Work = () => {
  // states for work, filter work and data
  const [about, setAbout] = useState([]);

  useEffect(() => {
    // create a query
    const query = '*[_type == "about"]';

    // get the data and set it
    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <>
  <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
        <h1 className="app__header-h1">About</h1>
        <p className="p__opensans" style={{ width:"100%" }}>Damanis Media is a team of photographers, who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. By doing so, we create images that stand out in today’s highly competitive wedding market. Ultimately, our goal is to craft beautiful images that are just as unique as the people in the photographs.Wedding photography is all about building connections. Every couple we encounter enriches our lives, and we feel truly blessed. Utilizing our in-depth knowledge of lighting and posing, we create shots that are intimate, natural, and authentic. We consistently explore new ways that expand our skillset; therefore, our editing, lighting, and style are continuously evolving. Each photograph is edited with care, as we enhance the details without losing the photo’s authenticity. Storytelling is our niche, we have the unique ability to tell real-time compelling and captivating stories especially on our Instagram which is quite popular [lol]. We are grateful for so many things, but especially for this career and all the wonderful people and places we know because of it. We are constantly inspired by beautiful landscapes, and couples who; love adventure, love each other, and show their love fearlessly.We do what we do because we believe there is no greater happiness than love. Now, who wouldn’t want to spend their life telling love stories?!</p>
            <div className="app__work-hover app__flex"></div>
        </div>

        <div className="app__wrapper_img">
        <img width="40px" src={images.header04} alt="header_img" />
        </div>
    </div>
    <div className="app__work-filter">
        <div className={`app__work-filter-item app__flex p-text`}>
            <h1 className="app__header-h1">Our Team</h1>
        </div>
        <div className="app__work-portfolio">
        {[].map((filter, index) => (
          <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
              <img src={urlFor(filter.imgUrl)}  alt={filter.title} />
              <div className="app__work-hover app__flex"></div>
              </div>
          </div>
          ))}
       </div>
    </div>
    </>
  );
};

export default Work






      