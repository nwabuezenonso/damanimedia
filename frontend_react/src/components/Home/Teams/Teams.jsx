import React, { useState, useEffect} from 'react'
import './Teams.css';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../../client';

const Teams = () => {
  const [Teams, setTeams] = useState([]);

  useEffect(() => {
    // create a query
    const query = '*[_type == "about"]';

    // get the data and set it
    client.fetch(query).then((data) => {
      setTeams(data);
    });
  }, [])

  return (
    <>
      <h2 className='teamsHeader' style={{textAlign: "center"}}>Our Teams</h2>
      <motion.div
        className="app__work-portfolio"
      >
        {Teams.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              
            </div>
            <p>{work.name}<br/>{work.desc}</p>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Teams