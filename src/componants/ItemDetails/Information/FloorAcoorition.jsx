import { Bath, Bed, BedDouble } from "lucide-react";
import Accordion from "react-bootstrap/Accordion";

function FloorAcoorition() {
  return (
    <div className="mb-5 accordion">
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between gap-2 w-100">
                <h5>First Floor</h5>
                <div className="d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center gap-1">
                        <span className="fw-bold text-muted"><BedDouble/></span>
                        <span className="text-muted">2 Bedroom</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <span className="fw-bold text-muted"><Bath/></span>
                        <span className="text-muted">2 Bathroom</span>
                    </div>
                </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <img src={require("../../../img(sodic)/img271.jpg")} className="w-100 h-100 object-fit-cover rounded-2" alt="demo" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
             <div className="d-flex align-items-center justify-content-between gap-2 w-100">
                <h5>Second Floor</h5>
                <div className="d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center gap-1">
                        <span className="fw-bold text-muted"><BedDouble/></span>
                        <span className="text-muted">2 Bedroom</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <span className="fw-bold text-muted"><Bath/></span>
                        <span className="text-muted">2 Bathroom</span>
                    </div>
                </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
              <img src={require("../../../img(sodic)/img271.jpg")} className="w-100 h-100 object-fit-cover rounded-2" alt="demo" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
       <div className="w-100 bg-body-secondary my-5" style={{height:"1px"}}></div>
    </div>
  );
}

export default FloorAcoorition;
