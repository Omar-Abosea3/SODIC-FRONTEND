import { FileText } from "lucide-react"


const DownloadPDF = ({path}) => {
  return (
    <div className="w-100 mb-5">
        <a href={path} download className="btn btn-outline-primary bg-white text-primary d-flex align-items-center gap-2 p-3" style={{width:"fit-content"}}>
            <span className="text-dark"><FileText /></span>
            <span className="fs-5 fw-semibold">Download Catalog</span>
        </a>
    </div>
  )
}

export default DownloadPDF;