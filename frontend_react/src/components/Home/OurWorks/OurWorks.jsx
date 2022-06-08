import React, { useState, useEffect} from 'react';
import './OurWorks.css';
import Masonry from 'react-masonry-css';
// import { motion } from 'framer-motion';
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
        setTimeout(() => {
          // conditional state
          if (item === 'All') {
            setFilterWork(works);
          } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
          }
        }, 500);
      };

  return (
    <div className='ourWork'>
        <div className='ourWorkTitle'>
            <p>
            <span>Our </span>
                Works
            </p>
            <div />
        </div>
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
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
          {filterWork.map((filter, index) => (
                <img src={urlFor(filter.imgUrl)} key={index} className= "imgWidth"  alt={filter.title} />
          ))}
      </Masonry>
    </div>
  )
}

export default OurWorks