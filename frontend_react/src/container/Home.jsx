import React from 'react';

import  { Header,About,FeaturedPost, Testimonial, Featured }  from '../components/Home';
import { Footer} from '../miniComponent';


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Featured />
      <FeaturedPost />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home