import React, { useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import  { data } from '../../data';

export default function Services() {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 }, 
    visible: { opacity: 1, x: 0 }, 
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { opacity: 1, x: 0 },    
  }


  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [units, setUnits] = useState([]);


  return (
    <div id='Projects' className='overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center ServAdress mb-5"
      >
        <h2 className="Servh2">Services</h2>
      </motion.div>
      <div className="container">
        <div className="row gy-3">
          
          {data.map((unit , idx) => <motion.div
            ref={idx === 0 ? ref1:ref2}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={idx === 0 ? leftVariants : rightVariants}
            transition={{ duration: 0.6 }}
            className="col-md-6"
            key={idx}
          >
            <div className="item text-center ">

              <figure className="position-relative">
                <img
                  className="w-100" 
                  src={unit.cover_photo}
                  alt="service1"
                  style={{ height: "500px" , objectFit: "cover" }}
                />
                {/* <div className="LayerSrv">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Read
                    More
                  </p>
                </div> */}
                <figcaption>
                  <h2 className="position-absolute top-0 start-0  p-3 text-white">
                    {unit.name}
                  </h2>
                    <Link to={`/units/${unit.id}`}>
           <p className="position-absolute bottom-0 start-0 p-3 text-white figP">
                    Learn More
                  </p>
          </Link>
                </figcaption>
              </figure>
              <img className='w-25' src={`${unit.des_Img}`} alt="" />
            </div>
          </motion.div>)}

    

     
        
        </div>
      </div>
    </div>
  );
}