import React from 'react';

// ,FeaturedPost, Intro ,Testimonial, Featured

import  { Header, About, OurWorks, Teams, Testimonials, Footer }  from '../components/Home';


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <OurWorks/>
      <Testimonials />
      <Teams />
      <Footer />
    </div>
  )
}

export default Home