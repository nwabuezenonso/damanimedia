import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../../constant';
import { SubHeading } from '../../../miniComponent';
import './Header.css'

const Header = () => {
  // adding a ref to a property
  const scrollRef = React.useRef(null);   // useref returns a object

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
      <div style={{paddingLeft: "0"}} className="app__gallery-content">
        <h1 className="headtext__cormorant">Capture Every Moment</h1>
        <h3 className="p__cormorant" style={{ color: '#000' }}> Based In Nigeria, Available Worldwide</h3>
        <p className="p__opensans" style={{ color: '#000', marginTop: '2rem' }}>Damani’s Media Is A Team Of Photographers, Who Push The Boundaries By Changing The Way Nigerian Weddings Have Traditionally Been Photographed. By Doing So, We Create Images That Stand Out In Today’s Highly Competitive Wedding Market. Ultimately, Our Goal Is To Craft Beautiful Images That Are Just As Unique As The People In The Photographs.</p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.header00, images.header01, images.header03, images.header04, images.header05, images.header07, images.header08, images.header09].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Header;