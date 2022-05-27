import React from 'react'
// import { BsTwitter, BsInstagram } from 'react-icons/bs'
// import { FaFacebookF } from 'react-icons/fa'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const SocialMedia = () => {
  return (
  <div className='app__social'>
    <div>
      <FiTwitter />
    </div>
    <div>
      <FiFacebook />
    </div>
    <div>
      <FiInstagram />
    </div>
  </div>
  )
}

export default SocialMedia