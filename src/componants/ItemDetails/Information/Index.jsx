import React from 'react'
import Description from './Description';
import OverView from './OverView';
import VedioPlayer from './VideoPlayer';
import myVedio from '../../../img(sodic)/vedio.mp4';
import PropertyDetails from './PropertyDetails';
import AmenitiesAndFeatures from './AmenitiesAndFeatures';
import Location from './Location';
import FloorAcoorition from './FloorAcoorition';
import DownloadPDF from './DownloadPDF';
const Information = ({unit}) => {
  return (
    <div id='information'>
        <Description/>
        <OverView/>
        <VedioPlayer src={myVedio} />
        <div className='my-5 w-100 bg-body-secondary' style={{height:"1px"}}></div>
        <PropertyDetails/>
        <AmenitiesAndFeatures/>
        <Location unit={unit} />
        <FloorAcoorition/>
        <DownloadPDF path={unit.pdfUrl || '/files/1.pdf'}/>
    </div>
  )
}

export default Information;