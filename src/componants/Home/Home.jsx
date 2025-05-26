import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeCSS from './Home.module.css';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import FloatingIcons from '../ContactIcon/ContactIcon';

export default function Home() {
  const words = ['Dream home', 'Perfect home','luxury home'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // يتغير كل 2 ثانية
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <FloatingIcons />
      <header>
        <motion.div
          className={HomeCSS.HeaderSec}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div className={HomeCSS.layer}>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={HomeCSS.title}
              style={{
                fontSize: 'clamp(2rem, 8vw, 3.5rem)', // Responsive font size
                lineHeight: '1.2',
                marginBottom: '1rem',
              }}
            >
              SODIC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{
                display: 'inline-flex', // Use inline-flex to keep text on same line
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem', // Reduced gap to minimize spacing
                fontSize: 'clamp(2rem, 6vw, 4rem)', // Consistent responsive font size
                fontWeight: '600',
                textAlign: 'center',
                margin: '0 auto', // Ensure centering
                width: '100%',
                maxWidth: '90vw', // Prevent overflow on small screens
                lineHeight: '1.3',
              }}
            >
              Find your{' '}
              <span
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  minWidth: 'clamp(200px, 50vw, 400px)', // Responsive minWidth
                  height: '1.3em',
                  fontSize: 'inherit', // Inherit font size from parent p
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      color: '#0089B4',
                      whiteSpace: 'nowrap',
                      fontSize: 'inherit', // Ensure same font size
                    }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
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