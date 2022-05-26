import React, { useState, useEffect} from 'react';

import { images } from '../../../constant';
import './About.css';
import { RiDoubleQuotesL } from 'react-icons/ri'

import { motion } from 'framer-motion';
import { urlFor, client } from '../../../client';

const About = () => {
  const [brands, setBrands] = useState([]); // set testimonials

  useEffect(() => {
    const brandsQuery = '*[_type == "featureds"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

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
            <button type="button" className="custom__button">Learn More</button>
          </div>

          <div className="app__chef-sign">
            <img src={images.logo} alt="sign_image" />
          </div>
        </div>
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.header05} alt="chef_image" />
        </div>
      </div>



        {/* brands */}
      <div className='brands'>
      <h1 className="headtext__cormorant">Featured on</h1>
        <div className="app__testimonial-brands app__flex">
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )


};

export default About;