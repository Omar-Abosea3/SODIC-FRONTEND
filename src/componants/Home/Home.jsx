import React from 'react';
import { motion } from 'framer-motion';
import HomeCSS from './Home.module.css';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import FloatingIcons from '../ContactIcon/ContactIcon';

export default function Home() {
  return (
    <>
      <FloatingIcons />
      <header>
        <motion.div
          className={HomeCSS.HeaderSec}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={HomeCSS.layer}>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={HomeCSS.title}
            >
              HELLO IN SODIC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className={HomeCSS.subtitle}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde expedita atque exercitationem doloribus, temporibus error.
            </motion.p>

            <Link to="/contactus">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className={HomeCSS.btn}
              >
                <span className={HomeCSS.text}>Sign now !</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </header>
      <Services />
    </>
  );
}
