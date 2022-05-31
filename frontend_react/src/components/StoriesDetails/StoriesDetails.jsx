import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { urlFor, client } from '../../client';
import './StoriesDetails.css';
import { images } from '../../constant';

const Stories = () => {
  const { id } = useParams()
  const [selectedStory, setSelectedStory] = useState([]);
  const [ story, setStory] = useState([])


  const scrollRef = React.useRef(null);   // useref returns a object

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  useEffect(() => {
    const query = `*[_type == "weddingstoriesdetails" && tags == '${id}']`; //fetch the first data

    client.fetch(query).then((data) => {
      setSelectedStory(data)

      console.log(data)
    });
    
    // const morequery = `[_type == "weddingstories]`

    // client.fetch(morequery).then((data) => {
    //   setStory(data)
    // })

  }, [id]);

  return (
    <>
    <div className='storiesTitle'>
      <h2 className='headtext__cormorant'>Wedding Story</h2>
      <h3 className='headtext__cormorant'>{id}</h3>
    </div>
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Capture Every <span style={{color: "red"}}>Moment!</span></h1>
        <h3 className="p__cormorant" style={{ color: '#000', marginTop: '2rem' }}> Based In Nigeria, Available Worldwide</h3>
        <p className="p__opensans" style={{ color: '#000', marginTop: '2rem' }}>Damani’s Media Is A Team Of Photographers, Who Push The Boundaries By Changing The Way Nigerian Weddings Have Traditionally Been Photographed. By Doing So, We Create Images That Stand Out In Today’s Highly Competitive Wedding Market. Ultimately, Our Goal Is To Craft Beautiful Images That Are Just As Unique As The People In The Photographs.</p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {selectedStory.map((data, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={urlFor(data.imgUrl)} alt="gallery_image" />
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
    </>
  );
};

export default Stories;