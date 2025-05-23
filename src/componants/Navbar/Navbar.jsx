import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'bootstrap/js/dist/collapse';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const collapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const handleLinkClick = () => {
    if (collapseRef.current) {
      const bsCollapse = Collapse.getOrCreateInstance(collapseRef.current);
      bsCollapse.hide(); // إغلاق القائمة بعد الضغط على رابط
    }
  };

  return (
    <>
      <style>
        {`
          .navbar {
            transition: all 1s ease-in-out;
          }
          .bg-body-white {
            background-color: #ffffff;
            animation: fadeToWhite 1s ease-in-out;
          }
          .navbar-dark {
            background-color: #212529;
            animation: fadeToDark 1s ease-in-out;
          }
          @keyframes fadeToWhite {
            from {
              background-color: #212529;
              opacity: 0.7;
            }
            to {
              background-color: #ffffff;
              opacity: 1;
            }
          }
          @keyframes fadeToDark {
            from {
              background-color: #ffffff;
              opacity: 0.7;
            }
            to {
              background-color: #212529;
              opacity: 1;
            }
          }
        `}
      </style>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-dark navbar-dark' : 'bg-body-white'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img
              style={{ width: '100px', maxWidth: '100%', height: 'auto' }}
              src={require('../../img(sodic)/SODIC_Logo_Teal_RGB.png')}
              alt="SodicLogo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/contactus" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/aboutus" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
