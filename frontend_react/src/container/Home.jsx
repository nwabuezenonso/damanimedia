import React from 'react';

// ,FeaturedPost, Intro ,Testimonial, Featured

import  { Header, About, OurWorks, Teams, Testimonials, Contact }  from '../components/Home';


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <OurWorks/>
      <Testimonials />
      <Teams />
      <Contact />
    </div>
  )
}

export default Home