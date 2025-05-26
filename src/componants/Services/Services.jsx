import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { data } from '../../data';

export default function Services() {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="Projects" className="overflow-hidden py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center ServAdress mb-5"
      >
        <h2 className="Servh2">Services</h2>
      </motion.div>

      <div className="container">
        <div className="row gy-3">
          {data.map((unit, idx) => {
            const variant = idx % 2 === 0 ? leftVariants : rightVariants;

            return (
              <motion.div
                key={idx}
                className="col-md-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={variant}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="card h-100 box-shadow overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    src={unit.cover_photo}
                    className="card-img-top"
                    style={{
                      height: '500px',
                      objectFit: 'cover',
                    }}
                    alt={unit.name}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{unit.name}</h5>
                    <p className="card-text">{unit.description}</p>
                    <Link to={`/units/${unit.id}`} className="btn">
                      More Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
