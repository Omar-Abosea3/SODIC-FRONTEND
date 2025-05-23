import React, { useEffect, useState } from 'react';
import './Aboutus.css';

export default function Aboutus() {
  const [animate, setAnimate] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(overlayTimer);
    };
  }, []);

  return (
    <div className="aboutus-page">
      <h1 className={`aboutus-title ${animate ? 'animate' : ''}`}>About Sodic</h1>

      <img
        src={require('../../img(sodic)/img71.jpg')}
        alt="About Us"
        className="aboutus-image"
      />

      {showOverlay && (
        <div className="overlay">
          <p className="overlay-text">
            Welcome to our company. We are committed to excellence and innovation.
          </p>
        </div>
      )}
    </div>
  );
}
