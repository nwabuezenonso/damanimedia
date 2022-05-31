import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import './StoriesDetails.css';
import { images } from '../../constant';

const Stories = () => {
  const { id } = useParams()
  const [selectedStory, setSelectedStory] = useState([]);
  useEffect(() => {
    const query = `*[_type == "weddingstoriesdetails" && tags == '${id}']`; //fetch the first data

    client.fetch(query).then((data) => {
      setSelectedStory(data)
    }); 
  }, [id]);

  

  if(id === 'IBIENE&NKASIOBI'){

  }else{

  }

  return (
    <>
    <div className='storiesTitle'>
      <h2 className='headtext__cormorant'>Wedding Story</h2>
      <h3 className="headtext__cormorant">{id}</h3>
    </div>
    <motion.div className="app__work-portfolio">
        {selectedStory.map((filter, index) => (
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

export default Stories;