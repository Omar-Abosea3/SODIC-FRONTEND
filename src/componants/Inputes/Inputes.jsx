import React, { useState } from 'react';
import { Mail, Phone, User, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const ContactForm = ({ width }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const regex = {
    name: /^[A-Za-z\s]{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    whatsapp: /^01[0125][0-9]{8}$/
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value === '') {
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
    } else if (!regex[name].test(value)) {
      setErrors({ ...errors, [name]: `Invalid ${name}` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {
      name: '',
      email: '',
      whatsapp: ''
    };

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      } else if (!regex[key].test(formData[key])) {
        newErrors[key] = `Invalid ${key}`;
      }
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      console.log('Form submitted:', formData);
        try {
          const res = await axios.post('/api/sendEmail', formData);
          toast.success(res.data.message);
        } catch (err) {
          toast.error('Something went wrong');
        }
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className={"d-flex align-items-center z-1 justify-content-center py-5  overflow-hidden " + (width?'sticky-top':'position-relative')}
      style={{
        background: 'linear-gradient(135deg, #f8f9ff 0%, #f3e8ff 50%, #fef7f7 100%)',
        height: width?'auto':'110vh'
      }}
    >
      {/* Background decorative elements */}
      <div className="position-absolute w-100 h-100" style={{ opacity: 0.3 }}>
        <div
          className="position-absolute rounded-circle"
          style={{
            top: '25%',
            left: '25%',
            width: '16rem',
            height: '16rem',
            background: width?'':'linear-gradient(45deg, #60a5fa, #a855f7)',
            filter: 'blur(60px)',
            animation: 'pulse 2s infinite'
          }}
        ></div>
        <div
          className="position-absolute rounded-circle"
          style={{
            bottom: '25%',
            right: '25%',
            width: '16rem',
            height: '16rem',
            background: width?'':'linear-gradient(45deg, #f472b6, #fb923c)',
            filter: 'blur(60px)',
            animation: 'pulse 2s infinite',
            animationDelay: '1s'
          }}
        ></div>
      </div>

      <div
        className="card border-0  shadow-lg"
        style={{
          maxWidth: '28rem',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          animation: 'fadeIn 0.5s ease-out'
        }}
      >
        <div className="card-header  text-center border-0 pb-2" style={{ backgroundColor: 'transparent' }}>
          <div
            className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle shadow-lg"
            style={{
              width: '4rem',
              height: '4rem',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              animation: 'scaleIn 0.6s ease-out'
            }}
          >
            <Mail className="text-white" size={32} />
          </div>
          <h2
            className="h4 fw-bold mb-0"
            style={{
              background: 'linear-gradient(45deg, #1f2937, #6b7280)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Contact Form
          </h2>
          <p className="text-muted small mt-2 mb-0">Get in touch with us. We'd love to hear from you.</p>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-medium text-dark d-flex align-items-center">
                <User size={16} className="me-2" />
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`form-control border-2 ${errors.name ? 'border-danger' : 'border-light'}`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(5px)',
                  transition: 'all 0.3s ease',
                  borderRadius: '0.5rem'
                }}
              />
              {errors.name && <div className="alert alert-danger py-2 mt-2 small border-0">{errors.name}</div>}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-medium text-dark d-flex align-items-center">
                <Mail size={16} className="me-2" />
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`form-control border-2 ${errors.email ? 'border-danger' : 'border-light'}`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(5px)',
                  transition: 'all 0.3s ease',
                  borderRadius: '0.5rem'
                }}
              />
              {errors.email && <div className="alert alert-danger py-2 mt-2 small border-0">{errors.email}</div>}
            </div>

            {/* WhatsApp Input */}
            <div className="mb-4">
              <label htmlFor="whatsapp" className="form-label fw-medium text-dark d-flex align-items-center">
                <Phone size={16} className="me-2" />
                WhatsApp Number
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="01(0,1,2,5)34567890"
                className={`form-control border-2 ${errors.whatsapp ? 'border-danger' : 'border-light'}`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(5px)',
                  transition: 'all 0.3s ease',
                  borderRadius: '0.5rem'
                }}
              />
              {errors.whatsapp && <div className="alert alert-danger py-2 mt-2 small border-0">{errors.whatsapp}</div>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-100 text-white fw-medium py-3 border-0 d-flex align-items-center justify-content-center"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)'
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner-border spinner-border-sm me-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} className="me-2" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="small text-muted mb-0">We'll get back to you within 24 hours</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
