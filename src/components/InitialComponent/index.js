import React from 'react';
import "./style.css";
import 'aos/dist/aos.css';

const InitialComponent = () => {
  return (
    <div className="container-box box-1">
      <div className='main-text'>
        Celebrating
      </div>
      <div className="text text-1" data-aos="slide-up" data-aos-delay="150">
        the Dreamers
      </div>
      <div className="text text-2" data-aos="slide-up" data-aos-delay="200">
        the Doers
      </div>
      <div className="text text-3"data-aos="slide-up" data-aos-delay="250">
        the ChangeMakers
      </div>
      
    </div>
  )
}

export default InitialComponent