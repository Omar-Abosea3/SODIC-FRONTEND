import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FocusOnSelect from "../Services/Slider/Slider";
import { data } from "../../data";

export default function ItemDetails() {
  const { id } = useParams();
  const unit = data.find((unit) => unit.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);

  if (!unit) {
    return <p className="text-center my-5">العقار غير موجود</p>;
  }

  return (
    <div className="container my-5" dir="rtl">
      {/* سلايدر الصور */}
      <FocusOnSelect images={unit.images} />

      {/* وصف الكمباوند */}
      <div className="bg-white p-4 rounded shadow-sm my-4 ms-auto">
        <h2 className="mb-3">{unit.name}</h2>
        <p className="text-muted">{unit.description}</p>
      </div>

      {/* الموقع */}
      <div className="mb-4">
        <h3 className="mb-3 text-center">LOCATION📍</h3>
        <iframe
          title="موقع العقار"
          src={unit.mapEmbedUrl}
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* زر اتصل بنا */}
     <Link to="/contactus">
       <div className="text-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg"
         
        >
Contact Us     
   </button>
      </div>
     
     </Link>

      
    </div>
  );
}
