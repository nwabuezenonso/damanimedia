import React, {useState} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../../constant';
import './FeaturedPost.css';

const Gallery = () => {
  const [gallery, setGallery] = useState([]); //testimonials and brands

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

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
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.header00, images.header03, images.header04, images.header05].map((image, index) => (
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
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant" style={{color: "#fff"}}>Featured Post</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>You might be wondering, what a post-wedding photograph means. In brief words, it is a shoot that is taken after a wedding. Some people might think it is not necessary, considering the couple had already created memories on the wedding day. Well, it has its importance. <br/><br/> No matter how dreamy your wedding venue is, there are always going to be limitations on where to take your portrait photographs. So having this session, gives you the opportunity to pick a location without putting the guests, decoration and other factors into consideration. <br/><br/> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>
        <button type="button" className="custom__button" style={{color: "#fff"}}>Book Us Today</button>
      </div>
    </div>
  );
};

export default Gallery;