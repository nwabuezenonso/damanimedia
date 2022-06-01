import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Portfolio.css';

const Work = () => {
  // states for work, filter work and data
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // create a query
    const query = '*[_type == "portfolio"]';

    // get the data and set it
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // setup the filter option
  const handleWorkFilter = (item) => {
   
    // set hooks to tiem
    setActiveFilter(item);
    // for animate
    setAnimateCard([{ y: 100, opacity: 0 }]);

    // settimout to trigger animation
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      // conditional state
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
    <div className='portfolio_bg_img' />
    <h2 className="head-text">Portfolio</h2>

      {/* loop over the categories */}
      <div className="app__work-filter">
        {['Portrait', 'Wedding' , 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* our class div used  */}
      {/* adding our data categories */}
       <motion.div className="app__work-portfolio">
          {filterWork.map((filter, index) => (
          <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
              <img src={urlFor(filter.imgUrl)}  alt={filter.title} />
              <motion.div className="app__work-hover app__flex"></motion.div>
              </div>
          </div>
          ))}
       </motion.div>
    </>
  );
};

export default MotionWrap(Work, 'app__works')