import React, { useState, useEffect} from 'react'
import './Teams.css';
import { SubHeading } from '../../../miniComponent';
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
      <div className='ourTeam'>
        <div className='ourWorkTitle'>
        <h1 className="app__header-h1"><span style={{fontWeight: "400"}}> our</span> Team 
        </h1>
        </div>
      </div>
      <div
        className="app__work-portfolio"
      >
      {Teams.map((work, index) => (
        <div className="app__work-item app__flex" key={index}>
          <div
            className="app__work-img app__flex"
          >
            <img src={urlFor(work.imgUrl)} alt={work.name} />

          </div>

          <div className="app__work-content app__flex">
            {/* <h4 className="team_name">{work.name}</h4> */}
            <p className="desc" style={{ marginTop: 10 }}>{work.desc}</p>

            <div className="app__work-tag app__flex">
              <p className="team_name">{work.name}</p>
            </div>
          </div>
        </div>
      ))}
      
      </div>

    </>
  )
}

export default Teams