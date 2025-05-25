import { Dot } from 'lucide-react';
import React from 'react'
const AmenitiesAndFeaturesData =['Smoke alarm' , 'Hangers' , 'Refrigerator' , 'Carbon monoxide alarm' , 'Bed linens' , 'Microwave' , 'First aid kit' , 'Extra pillows & blankets', 'Bed linens' , 'Microwave' , 'First aid kit' , 'Extra pillows & blankets'];
const AmenitiesAndFeatures = () => {
  return (
    <div className='w-100 mb-5'>
        <div className='mb-4'>
            <h5 className='fw-semibold text-dark'>Amenities and features</h5>
        </div>
        <ul className="d-flex list-unstyled justify-content-between align-items-center flex-wrap gap-2">
            {AmenitiesAndFeaturesData.map((item,index)=>(<li style={{minWidth:"30%" }} key={index} className="text-muted d-flex align-items-center gap-2">
                <span><Dot/></span>
                <span>{item}</span>
            </li>))}
        </ul>
        <div className='my-5 w-100 bg-body-secondary' style={{height:"1px"}}></div>
    </div>
  )
}

export default AmenitiesAndFeatures