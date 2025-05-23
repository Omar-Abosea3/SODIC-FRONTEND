import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { motion, scale } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';


const ContactForm = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const regex = {
    name: /^[A-Za-z\s]{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    whatsapp: /^01[0125][0-9]{8}$/
  };

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input
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
    const newErrors = {};
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
      // Add your submit logic here
       try {
      const res = await axios.post('/api/sendEmail', formData);
      toast.success(res.data.message);
    } catch (err) {
      toast.error('Something went wrong');
    }
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <motion.div
           initial={{ opacity: 0, scale: 0.5,y: 200,rotate: 180 }}
           animate={{ opacity: 1, scale: 1,y: 0,rotate: 0 }}
           transition={{ duration: 1 }}
           className="p-4 bg-dark border border-secondary rounded shadow">
            <h2 className="text-white text-center mb-4">Contact Form</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-light">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-secondary text-white border-secondary"
                />
                {errors.name && <Alert variant="danger" className="mt-2">{errors.name}</Alert>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-light">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-secondary text-white border-secondary"
                />
                {errors.email && <Alert variant="danger" className="mt-2">{errors.email}</Alert>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formWhatsapp">
                <Form.Label className="text-light">WhatsApp Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="01(0,1,2,5)34567890"
                  className="bg-secondary text-white border-secondary"
                />
                {errors.whatsapp && <Alert variant="danger" className="mt-2">{errors.whatsapp}</Alert>}
              </Form.Group>

              <motion.button
                whileHover={{ scale: 1.01 }}
                variant="primary"
                type="submit"
                className="w-100 mt-3"
                style={{ backgroundColor: '#007bff', borderColor: '#007bff',borderRadius: '5px' }}
              >
                Submit
              </motion.button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;