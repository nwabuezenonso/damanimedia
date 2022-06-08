import React from 'react';
import './Contact.css'

const Contact = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false); 
  return (
    <div>
      <div className='ourTeam'>
        <h1 className="app__header-h1"><span style={{fontWeight: "400"}}> Contact</span> Now! 
        </h1>
        <button type="button" className="custom__button" style={{padding: "2rem"}}>
          Contact
          <div style={{backgroundColor: "#000", height: "2px", width: "45px", marginLeft: "38px" }} />
        </button>
      </div>

      {/* ToggleBar */}

      <div style={{backgroundColor: "#fff" }} className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          {/* content */}
          <div  className="app__header app__wrapper" id="home">
            <div className="app__wrapper_info">
              {/* info */}
              <div className="app__footer-form app__flex">
                <div className="app__flex">
                  <input className="p-text" type="text" placeholder="Your Name" name="name" />
                </div>
                <div className="app__flex">
                  <input className="p-text" type="email" placeholder="Your Email" name="email"/>
                </div>
                <div>
                  <textarea
                    className="p-text"
                    placeholder="Your Message"
                    name="message"
                  />
                </div>
                <button type="button" className="p-text">Send Message</button>
              </div>
              {/* info */}
            </div>

            <div style={{  justifyContent: "right"}} id="header" className="app__wrapper_img"></div>
          </div>
          {/* content */}
      </div>

      {/* ToggleMenu */}

    </div>
  )
}

export default Contact