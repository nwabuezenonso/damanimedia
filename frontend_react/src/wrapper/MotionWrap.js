import React from 'react';  // import react
import { motion } from 'framer-motion';  // import framer-motion

// higher order component on animate on scroll
const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames}`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;