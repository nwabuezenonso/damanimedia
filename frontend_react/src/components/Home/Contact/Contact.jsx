import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className='ourTeam'>
        <div className='ourWorkTitle'>
          <p>
            <span>Contact </span>
              now!
          </p>
          <div />
        </div>
        <button type="button" className="custom__button" style={{padding: "2rem"}}>
          Read More
          <div style={{backgroundColor: "#000", height: "2px", width: "45px", marginLeft: "38px" }} />
        </button>
      </div>
    </div>
  )
}

export default Contact