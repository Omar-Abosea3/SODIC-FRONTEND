import { Bath, Bed, BedDouble } from "lucide-react";
import Accordion from "react-bootstrap/Accordion";

const LocationData = [
    {
        label:'Address',
        value:'Jeddah, Saudi Arabia'
    },
    {
        label:'City',
        value:'Jeddah'
    },
    {
        label:'State/Country',
        value:'Saudi Arabia'
    },
    {
        label:'Postal Code',
        value:'12345'
    },
    {
        label:'Area',
        value:'123-456-7890'
    }
]

const Location = ({unit}) => {
  return (
    <div className="mb-5">
        <div className="mb-2"><h5 className="fw-semibold text-dark">Map Location📍</h5></div>
        <div className="w-100 mb-3">
            <iframe
                title="موقع العقار"
                src={unit.mapEmbedUrl}
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
         <div className="mb-5 accordion">
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between gap-2 w-100">
                <h5>Advantge Of Location</h5>
                <div className="d-flex align-items-center gap-2">
                    
                    
                </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <img src={unit.Adv_img} className="w-100 h-100 object-fit-cover rounded-2" alt="demo" />
          </Accordion.Body>
        </Accordion.Item>
        
      
      </Accordion>
       <div className="w-100 bg-body-secondary my-5" style={{height:"1px"}}></div>
    </div>
        <div className='my-5 w-100 bg-body-secondary' style={{height:"1px"}}></div>
      </div>
  )
}

export default Location