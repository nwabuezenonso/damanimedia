import React from 'react';

import  { Header,FeaturedPost, Testimonial, Featured }  from '../components/Home';
import { Footer} from '../miniComponent';


const Home = () => {
  return (
    <div>
      <Header />
      <Featured />
      <FeaturedPost />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home