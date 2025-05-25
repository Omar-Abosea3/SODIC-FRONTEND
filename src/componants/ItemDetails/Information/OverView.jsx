import { Bath, Bed, Crop, Hammer, House, Ruler, SlidersHorizontal, Warehouse } from 'lucide-react';
import React from 'react'

const overViewData = [
    {
        lable:'ID:',
        content:2297,
        icon:<House/>
    },
    {
        lable:'Type:',
        content:'House',
        icon:<SlidersHorizontal />
    },
    {
        lable:'Garages:',
        content:'1',
        icon:<Warehouse />
    },
    {
        lable:'bedrooms:',
        content:'2Rooms',
        icon:<Bed />
    },
    {
        lable:'Bathrooms:',
        content:'2Rooms',
        icon:<Bath />
    },
    {
        lable:'Land Size:',
        content:'2,000 Sqft',
        icon:<Crop />
    },
    {
        lable:'Year Built:',
        content:'2024',
        icon:<Hammer />
    },
    {
        lable:'Size:',
        content:'900 Sqft',
        icon:<Ruler />
    },

]


const OverView = () => {
  return (
    <div className='w-100 mb-5'>
        <div className='mb-4'>
            <h5 className='fw-semibold text-dark'>Overview</h5>
        </div>
        <div className="row gy-5 gx-3">
            {overViewData.map((item,index)=>(
                <div key={index} className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <div className="d-flex align-items-center gap-2">
                        <div className="p-3 bg-body-secondary rounded-circle iconBox">
                            {item.icon}
                        </div>
                        <div className="d-flex flex-column">
                            <span className="text-muted">{item.lable}</span>
                            <span className="fw-bold">{item.content}</span>
                        </div>
                    </div>
                </div>
            ))}
           
        </div>
    </div>
  )
}

export default OverView;