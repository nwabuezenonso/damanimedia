import React from 'react'
import './Header.css';
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <>
    <motion.div className="social-sidebar-area bg-white"
      initial = {{y: -300}}
      animate={{y: -10}}
      transition={{ duration:1, type: 'spring', stiffness: 100}}
    >
      <div className="social-info-area">
        <a href="https://www.facebook.com/demian.c.david" data-toggle="tooltip" target="_blank" rel='noreferrer' data-placement="right" title="Facebook"><FaFacebook /> <span>Facebook</span></a>
        <a href="https://www.instagram.com/damanis_photography/" target="_blank" rel='noreferrer' data-placement="right" title="Twitter"><FaInstagram /> <span>Instagram</span></a>
        <a href="https://api.whatsapp.com/send?phone=23408094574854&text=welcome%20to%20Damanis%20Media" rel='noreferrer' target="_blank" data-toggle="tooltip" data-placement="right" title="WhatsApp"><FaWhatsapp/><span>WhatsApp</span></a>
      </div>
    </motion.div>

    <div  className="app__header app__wrapper" id="home">
    <motion.div className="app__wrapper_info"
      initial = {{x: -300}}
      animate={{x: 0}}
    >
      <h1 className="app__header-p" style={{fontSize: "60px", color: "#000",lineHeight: "67px",paddingBottom: "0px", paddingTop: "139px"}}><span style={{fontWeight: "600"}}>Capture</span> <br/>Every Moment
      </h1>
      <p className="app__header-p" style={{ margin: '2rem 0' }}>We are a team of photographers who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. Our goal is to craft beautiful images that are just as unique as the people in the photographs.<br/>
      <a href='#about'>
        <button style={{marginTop: "1rem", color: "#000"}} type="button" className="custom__button">
          Read More
        </button>
      </a>
      </p>
      <div />
    </motion.div>

    <motion.div style={{  justifyContent: "right"}} id="home" className="app__video"
      initial = {{x: 300}}
      animate={{x: 0}}
    >
    </motion.div>
    </div>
    </>
  )
}

export default Header