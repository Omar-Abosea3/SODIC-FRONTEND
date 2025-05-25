import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";
import SliderComponent from "./SliderComponent";
import Information from "./Information/Index.jsx";
import ContactForm from "../Inputes/Inputes.jsx";


export default function ItemDetails() {
  const { id } = useParams();
  const unit = data.find((unit) => unit.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);

  if (!unit) {
    return <p className="text-center my-5">العقار غير موجود</p>;
  }

  return (
    
    <div className="container-fluid my-4" >
      <div className="mb-2 ">
        <h1 className="text-black mb-4" >
          <span  className="hover-text">{unit.name}</span>
        </h1>
        <hr />
      </div>
      {/* سلايدر الصور */}
      <div className="mb-5">
        <SliderComponent images={unit.images} />
      </div>
  

      {/* وصف الكمباوند */}
      <div className="row ">
        {/* information */}
        <div className="col-lg-8 col-md-9 col-12">
            <Information unit={unit}/>
        </div>
          {/* contact-us form */}
         <div className="col-lg-4 col-md-3 col-12 position-relative">
            <ContactForm width={"100%"}/>
        </div>
      </div>
      {/* <div className="bg-white p-4 rounded shadow-sm my-4 ms-auto">
        <h2 className="mb-3">{unit.name}</h2>
        <p className="text-muted">{unit.description}</p>
      </div> */}

   
      

    

      
    </div>
  );
}
