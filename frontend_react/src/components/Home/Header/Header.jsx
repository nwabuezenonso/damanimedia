import React from 'react'
import './Header.css'
import { SubHeading } from '../../../miniComponent'
import { images } from '../../../constant'

const Header = () => {
  return (
  <div  className="app__header app__wrapper" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-p" style={{fontSize: "60px", color: "#000",lineHeight: "67px",paddingBottom: "0px", paddingTop: "139px"}}><span style={{fontWeight: "600"}}>Capture</span> <br/>Every Moment
      </h1>
      <p className="app__header-p" style={{ margin: '2rem 0' }}>We are a team of photographers who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. Our goal is to craft beautiful images that are just as unique as the people in the photographs.<br/>
        <button style={{marginTop: "1rem", color: "#000"}} type="button" className="custom__button">
          Read More
        </button>
      </p>
      <div />
    </div>

    <div style={{  justifyContent: "right"}} id="home" className="app__video">
      <video
        src={images.introvid}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="app__wrapper_img"
      />
       <div className="app__video-overlay flex__center">
          
        </div>
    </div>
  </div>
  )
}

export default Header