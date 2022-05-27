import React from 'react';

import  { Header,About,FeaturedPost, Testimonial }  from '../components/Home'


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <FeaturedPost />
      <Testimonial />
    </div>
  )
}

export default Home