import React, {useRef} from 'react';
import './About.css';
import { images } from '../../../constant';
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
  // adding a ref to a property
  const scrollRef = useRef(null);   // useref returns a object

  return (
    <div id='about' className="app__gallery flex__center">
      <div className="app__gallery-content">
        <p className='headtext__poppins' style={{ color: '#fff', marginBottom: '1rem' }}>About</p>
        <h1 className="headtext__poppins" style={{ color: '#fff'}}>Based in Nigeria<br/> Available Worldwide</h1>
        <p className="headtext__poppins" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Wedding photography is all about building connections. Every couple we encounter enriches our lives, and we feel truly blessed. Utilizing our in-depth knowledge of lighting and posing, we create shots that are intimate, natural, and authentic. We consistently explore new ways that expand our skillset; therefore, our editing, lighting, and style are continuously evolving. Each photograph is edited with care, as we enhance the details without losing the photo’s authenticity.Storytelling is our niche, we have the unique ability to tell real-time compelling and captivating stories especially on our Instagram which is quite popular [lol].</p>
        <div style={{paddingTop: "1rem", color: "#fff",display: "flex"}}>
          <div className='icons'>
            <a href='https://www.facebook.com/demian.c.david'><TiSocialFacebook  /></a>
            <div  className='facebook'></div>
          </div> 
          <div className='icons'>
            <a href="https://www.instagram.com/damanis_photography/"><TiSocialInstagram /></a>
            <div  className='instagram'></div>
          </div>
          <div className='icons'>
              <a href='https://api.whatsapp.com/send?phone=23408094574854&text=welcome%20to%20Damanis%20Media'><FaWhatsapp /></a>
            <div  className='twitter'></div>
          </div>
        </div>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
            <div className="app__gallery-images_card flex__center">
              <img src={images.about} alt="gallery_image" />
            </div>
        </div>
        <div className="app__gallery-images_arrows">
        </div>
      </div>
    </div>
  );
};

export default About