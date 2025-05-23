import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './mediaQ.css'
export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px 0px -100px 0px' });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="container-fluid footer bg-dark mt-5 py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <motion.div
          className="col-md-3 text-center"
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <figure>
            <img
              className="w-75"
              src={require('../../img(sodic)/SODIC_Logo_White_RGB.png')}
              alt="Sodiclogo"
            />
          </figure>
          <div className="Telephonenum text-white mb-3">
            <i>
              <i className="fa-solid fa-phone me-2"></i> 16220
            </i>
          </div>
          <div className="icons text-white">
            <h6>Follow Us:</h6>
            <i className="fa-brands fa-facebook me-2"></i>
            <i className="fa-brands fa-twitter me-2"></i>
            <i className="fa-brands fa-youtube me-2"></i>
            <i className="fa-brands fa-linkedin me-2"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </motion.div>
      </div>
    </div>
  );
}