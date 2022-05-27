import React from 'react';

import  { Header,About,FeaturedPost, Testimonial, Featured }  from '../components/Home'


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Featured />
      <FeaturedPost />
      <Testimonial />
    </div>
  )
}

export default Home