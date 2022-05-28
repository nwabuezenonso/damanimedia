import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constant';
import { urlFor, client } from '../../client';
import './stories.css'


const Gallery = () => {
  // adding a ref to a property
  const [stories, setStories] = useState([]);
  const [index, setIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const scrollRef = React.useRef(null);   // useref returns a object

  useEffect(() => {
    // create a query
    const query = '*[_type == "stories"]';

    // get the data and set it
    client.fetch(query).then((data) => {
      setStories(data);
      // setFilterWork(data);
    });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <>
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        {/* <SubHeading title="Instagram" /> */}
        <h1 className="headtext__cormorant" style={{color: "#fff"}}>Wedding Stories</h1>
        <p className="p__opensans" style={{ marginTop: '2rem' }}>We love to see two people who deserve happiness so much that they find it with each other and we will also love to help you build your happy memories </p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {stories.map((story, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={urlFor(story.imgUrl[index])} alt={story.title} />
              <p className='headtext__cormorant  gallery__image-icon' style={{color: "#fff"}}>{story.tags}</p>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>

    {/* motion div data */}
    <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
        {[images.header00, images.header04, images.header07, images.header09, images.header08].map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work} alt="name" />

              <motion.div whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }} className="app__work-hover app__flex">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.90] }} transition={{ duration: 0.25 }} className="app__flex">
                    <AiOutlineInstagram />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Gallery;