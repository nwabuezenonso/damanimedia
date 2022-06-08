import React from 'react'
import './About.css';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'

const About = () => {
  return (
    <div className="app__about" >
    <div className="">
       <p>About us</p>
       <h3>Based in Nigeria <br/> Available Worldwide</h3>
      <p className="" style={{ textAlign: "justify"}}>Wedding photography is all about building connections. Every couple we encounter enriches our lives, and we feel truly blessed. Utilizing our in-depth knowledge of lighting and posing, we create shots that are intimate, natural, and authentic. We consistently explore new ways that expand our skillset; therefore, our editing, lighting, and style are continuously evolving. Each photograph is edited with care, as we enhance the details without losing the photo’s authenticity.Storytelling is our niche, we have the unique ability to tell real-time compelling and captivating stories especially on our Instagram which is quite popular [lol]. We are grateful for so many things, but especially for this career and all the wonderful people and places we know because of it. We are constantly inspired by beautiful landscapes, and couples who; love adventure, love each other, and show their love fearlessly.We do what we do because we believe there is no greater happiness than love. Now, who wouldn’t want to spend their life telling love stories?!</p>
      <p>follow us <a href='facebook.com' style={{color: "#fff"}}><TiSocialFacebook /> </a> <a href='facebook.com' style={{color: "#fff"}}><TiSocialInstagram /></a> <a href='facebook.com' style={{color: "#fff"}}><TiSocialTwitter/></a></p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

  </div>
  )
}

export default About