import React from 'react';

import  { Header,FeaturedPost, Intro ,Testimonial, Featured }  from '../components/Home';
import { Footer} from '../miniComponent';


const Home = () => {
  return (
    <div>
      <Header />
      <Featured />
      <FeaturedPost />
      <Intro />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home