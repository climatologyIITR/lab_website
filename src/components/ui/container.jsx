'use client';

import { motion } from 'framer-motion';

const Container = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`container pl-0 pr-0  ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </motion.div>
  );
};

export default Container;
