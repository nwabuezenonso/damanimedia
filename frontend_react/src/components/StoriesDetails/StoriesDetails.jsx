import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import './StoriesDetails.css';
import { images } from '../../constant';

const Stories = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  } ;
  const { id } = useParams()
  const [selectedStory, setSelectedStory] = useState([]);
  const [SingleQuery, setSingleQuery] =  useState([]);
  useEffect(() => {
    const query = `*[_type == "weddingstoriesdetails" && tags == '${id}']`; //fetch the first data
    const singleQuery = `*[_type == "weddingstoriesdetails" && tags == '${id}'][0]`; //fetch the first data

    client.fetch(query).then((data) => {
      setSelectedStory(data)
    }); 

    client.fetch(singleQuery).then((data) => {
      setSingleQuery(data)
    }); 

    console.log(selectedStory)
    console.log(id)
  }, [id]);

  return (
    <>
    <div className='div_block'>
        {SingleQuery.map((data, index) => (
          <img src={urlFor(data.imgUrl)} key={index} className= "imgWidth"  alt={data.name} />
        ))}
    </div>
    <div className='storiesTitle'>
      <h2 className='headtext__cormorant'>Wedding Story</h2>
      <h3 className="headtext__cormorant">{id}</h3>
    </div>
    <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {selectedStory.map((filter, index) => (
            <img src={urlFor(filter.imgUrl)} key={index} className= "imgWidth"  alt={filter.name} />
          ))}
    </Masonry>
    </>
  );
};

export default Stories;