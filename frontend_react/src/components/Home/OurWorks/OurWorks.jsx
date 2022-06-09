import React, { useState, useEffect} from 'react';
import './OurWorks.css';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../../client';

const OurWorks = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };

    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
    useEffect(() => {
      // create a query
      const query = '*[_type == "portfolio"]';
  
      // get the data and set it
      client.fetch(query).then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
    }, [])

    const handleWorkFilter = (item) => {
        // settimout to trigger animation
          // for animate
          setAnimateCard([{ y: 100, opacity: 0 }]);
        setTimeout(() => {
          // conditional state
          setAnimateCard([{ y: 0, opacity: 1 }]);
          if (item === 'All') {
            setFilterWork(works);
          } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
          }
        }, 500);
      };

  return (
    <div className='ourWork'>
        {/* <h1 className="app__header-h1"><span style={{fontWeight: "400"}}> our</span> Works </h1> */}
        <div className="app__work-filter">
            {['Portrait', 'Wedding', 'Engagement', 'LifeStyle' , 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text  'item-active' : ''}`}
            >
              {item}
            </div>
            ))}
        </div>
        <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filterWork.map((filter, index) => (
            <img src={urlFor(filter.imgUrl)} key={index} className= "imgWidth"  alt={filter.title} />
          ))}
      </Masonry>
        </motion.div>
    </div>
  )
}

export default OurWorks