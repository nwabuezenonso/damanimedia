import React, {useState, useEffect, useRef} from 'react'
import './About.css';
import { images } from '../../../constant';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'

const About = () => {
  // adding a ref to a property
  const scrollRef = useRef(null);   // useref returns a object

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <p className='headtext__poppins' style={{ color: '#AAAAAA', marginBottom: '1rem' }}>About</p>
        <h1 className="headtext__poppins">Based in Nigeria<br/> Available Worldwide</h1>
        <p className="headtext__poppins" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Wedding photography is all about building connections. Every couple we encounter enriches our lives, and we feel truly blessed. Utilizing our in-depth knowledge of lighting and posing, we create shots that are intimate, natural, and authentic. We consistently explore new ways that expand our skillset; therefore, our editing, lighting, and style are continuously evolving. Each photograph is edited with care, as we enhance the details without losing the photo’s authenticity.Storytelling is our niche, we have the unique ability to tell real-time compelling and captivating stories especially on our Instagram which is quite popular [lol].</p>
        <div style={{paddingTop: "1rem", display: "flex"}}>
          <div className='icons'><TiSocialFacebook  /><div  className='facebook'></div></div>   <div className='icons'><TiSocialInstagram /><div  className='instagram'></div></div>   <div className='icons'><TiSocialTwitter /><div  className='twitter'></div></div>
        </div>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.header00, images.header01, images.header03, images.header04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
        </div>
      </div>
    </div>
  );
};

export default About