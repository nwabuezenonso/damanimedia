import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { urlFor, client } from '../../client';
import { MotionWrap } from '../../wrapper';
import './Stories.css';

const Stories = () => {
  const [allStories, setAllStories] = useState([]);

  useEffect(() => {
    const weddingquery = '*[_type == "weddingstories"]';

    client.fetch(weddingquery).then((data) => {
      setAllStories(data)
    });  
  }, []);

  return (
    <>
    <div className='portfolio_bg_img' />
    <h2 style={{ color: "#000", fontSize: "32px"}} className="head-text">Wedding Stories</h2>

    {/* motion div data */}
    <motion.div className="app__work-portfolio">
        {allStories.map((filter, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(filter.imgUrl)}  alt={filter.title} />
              <motion.div className="app__work-hover app__flex"></motion.div>
            </div>
            <p style={{ margin: "0", padding: "0"}}>{filter.text}</p>
           <Link to={`/weddingstories/${filter.tags}`}><p className='p__cormorant' style={{color: "#000", textDecoration: "underline"}}>{filter.title}</p></Link>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default MotionWrap(Stories);