import React from 'react'

export default function Loadingscreen() {
  return <>
  <div className="loadingscreen d-flex justify-content-center align-items-center vh-100  ">
    <div className="loader">
        <img src={require("../../img(sodic)/loader.gif")} alt="Loader" />
    </div>
  </div>
  
  </>
}
