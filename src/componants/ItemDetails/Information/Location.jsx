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
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
            {LocationData.map((item, index) => <div key={index} style={{minWidth:"48%"}}>
                <div className="w-100 d-flex justify-content-between align-items-center gap-2">
                    <span className="fw-bold">{item.label}</span>
                    <span className="text-muted">{item.value}</span>
                </div>
            </div>)}
        </div>
        <div className='my-5 w-100 bg-body-secondary' style={{height:"1px"}}></div>
      </div>
  )
}

export default Location