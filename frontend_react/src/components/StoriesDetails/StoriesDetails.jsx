import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

import { urlFor, client } from '../../client';
import './StoriesDetails.css';

const Stories = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  } ;
  const { id } = useParams()
  const [selectedStory, setSelectedStory] = useState([]);
  useEffect(() => {
    const query = `*[_type == "weddingstoriesdetails" && tags == '${id}']`; //fetch the first data

    client.fetch(query).then((data) => {
      setSelectedStory(data)
    }); 

  }, [id]);
  return (
    <>
    <div className='div_block'>
   
    </div>
    <div className='storiesTitle'>
      <h2 className='headtext__cormorant'>Wedding <br/> Story</h2>
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

    <Link className="PreviousLink" to="/weddingstories">
      Go to previous page
    </Link>
    </>
  );
};

export default Stories;