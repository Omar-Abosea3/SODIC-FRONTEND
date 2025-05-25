import React, { useState } from 'react';
import {  Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/aboutus' },
    { label: 'Contact Us', href: '/contactus' },
    { label: 'Projects', href: '#Projects' },
    // { label: 'About', href: '/about' },
    // { label: 'Contact', href: '/contact' }
  ];

  

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light  shadow-lg sticky-top rounded-5 mt-2 mx-1">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={require('../../img(sodic)/SODIC_Logo_Teal_RGB.png')} alt="Sodiclogo" className="img-fluid" style={{ height: '40px' }}/>
          </Link>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  {item.href.includes('#') ? <a
                    href={item.href}
                    className="nav-link px-3 position-relative"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#007bff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6c757d';
                    }}
                  >
                    {item.label}
                  </a>:<Link
                    to={item.href}
                    className="nav-link px-3 position-relative"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#007bff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6c757d';
                    }}
                  >
                    {item.label}
                  </Link>}
                </li>
              ))}
            </ul>
          </div>

          {/* Search and User Menu */}
          <div className="d-flex align-items-center gap-2">
  
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-outline-secondary d-md-none"
              type="button"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;