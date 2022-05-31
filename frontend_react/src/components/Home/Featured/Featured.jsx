import React, { useState, useEffect} from 'react';

import './Featured.css';

import { motion } from 'framer-motion';
import { urlFor, client } from '../../../client';

const About = () => {
  const [brands, setBrands] = useState([]); // set testimonials

  useEffect(() => {
    const brandsQuery = '*[_type == "featureds"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
        {/* brands */}
        <div className='brands'>
            <div style={{background: "#000"}} className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    key={brand._id}
                    >
                    <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </div>
    </>
  )


};

export default About;