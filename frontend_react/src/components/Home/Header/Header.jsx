import React from 'react'
import './Header.css'
import { SubHeading } from '../../../miniComponent'

const Header = () => {
  return (
  <div  className="app__header app__wrapper" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1"><span style={{fontWeight: "400"}}>Capture</span> <br/>Every Moment
      <SubHeading />
      </h1>
      <p className="app__header-p" style={{ margin: '2rem 0' }}>Damani’s Media is a team of photographers, who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. By doing so, we create images that stand out in today’s highly competitive wedding market. Ultimately, our goal is to craft beautiful images that are just as unique as the people in the photographs.</p>
      <button type="button" className="custom__button">
        Read More
        <SubHeading />
      </button>
      <div />
    </div>

    <div style={{  justifyContent: "right"}} id="header" className="app__wrapper_img">

    </div>
  </div>
  )
}

export default Header