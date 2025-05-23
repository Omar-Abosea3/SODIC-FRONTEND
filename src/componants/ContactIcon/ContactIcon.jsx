import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingIcons = () => {
  const phoneNumber = "01229491531";  

  return (
    <div
      style={{
        
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1050,
      }}
      className="d-flex flex-column align-items-center gap-2"
    >
      
      <Link
        to={`tel:${phoneNumber}`}
        className="bg-white border rounded-circle shadow p-3 d-flex align-items-center justify-content-center"
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <FaPhone size={20} className="text-success" />
      </Link>

      <Link
        to={`https://wa.me/20${phoneNumber.replace(/^0/, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-success text-white rounded-circle shadow p-3 d-flex align-items-center justify-content-center"
        style={{ textDecoration: "none" }}
      >
        <FaWhatsapp size={20} />
      </Link>
    </div>
  );
};

export default FloatingIcons;
