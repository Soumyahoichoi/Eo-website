import React from 'react';
import "./style.css";
import image from "./../../asset/sample.gif";

const Carosel = () => {
  return (
    <div className='container-box box-3'>
        <div className="min-box-4">
          <div className='inner-text'>
            The last RIE in Kolkata created a <span className='color-text'> benchmark </span>
          </div>
        </div>
        <img src={image} alt="event-images" />
    </div>
  )
}

export default Carosel