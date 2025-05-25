import React from 'react';
import { X, Home, Phone, Mail, MapPin } from 'lucide-react';

export const MobileMenu = ({ isOpen, onClose, navItems }) => {
  if (!isOpen) return null;

  return (
    <div className="d-md-none position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 1050, backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="position-fixed top-0 start-0 h-100 bg-white shadow" style={{ width: '16rem' }}>
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <div className="d-flex align-items-center">
            <Home className="me-2 text-primary" size={24} />
            <span className="h5 mb-0 fw-bold text-dark">EstateHub</span>
          </div>
          <button
            onClick={onClose}
            className="btn btn-outline-secondary btn-sm"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="py-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="d-block px-3 py-2 text-decoration-none text-dark"
              style={{ transition: 'all 0.2s' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e3f2fd';
                e.target.style.color = '#1976d2';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#212529';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="position-absolute bottom-0 start-0 end-0 p-3 border-top bg-light">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex align-items-center">
              <Phone size={16} className="me-2 text-muted" />
              <small className="text-muted">(555) 123-4567</small>
            </div>
            <div className="d-flex align-items-center">
              <Mail size={16} className="me-2 text-muted" />
              <small className="text-muted">info@estatehub.com</small>
            </div>
            <div className="d-flex align-items-center">
              <MapPin size={16} className="me-2 text-muted" />
              <small className="text-muted">123 Real Estate Ave</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};