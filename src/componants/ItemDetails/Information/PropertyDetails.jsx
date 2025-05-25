const PropertyDetailsData = {
  row1: [
    {
      lable: "ID:",
      content: "#2297",
    },
    {
      lable: "Price:",
      content: "$7,500",
    },
    {
      lable: "Size:",
      content: "150 sqft",
    },
    {
      lable: "Rooms:",
      content: "9",
    },
    {
      lable: "Baths:",
      content: "3",
    },
  ],
  row2: [
    {
      lable: "Beds:",
      content: "7.328",
    },
    {
      lable: "Year built:",
      content: "2024",
    },
    {
      lable: "Type:",
      content: "Villa",
    },
    {
      lable: "Status:",
      content: "For sale",
    },
    {
      lable: "Garage:",
      content: "1",
    },
  ],
};

const PropertyDetails = () => {
  return (
    <div className="w-100 mb-5">
      <div className="mb-4">
        <h5 className="text-dark fw-semibold">Property Details</h5>
      </div>
      <div className="row g-3">
        <div className="col-lg-6 col-12">
          {PropertyDetailsData.row1.map((item, i) => (
            <div key={i} className="d-flex align-items-center gap-2 mb-2">
              <span className="fw-bold">{item.lable}</span>
              <span className="text-muted">{item.content}</span>
            </div>
          ))}
        </div>
        <div className="col-lg-6 col-12">
          {PropertyDetailsData.row2.map((item, i) => (
            <div key={i} className="d-flex align-items-center gap-2 mb-2">
              <span className="fw-bold">{item.lable}</span>
              <span className="text-muted">{item.content}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='my-5 w-100 bg-body-secondary' style={{height:"1px"}}></div>
    </div>
  );
}

export default PropertyDetails