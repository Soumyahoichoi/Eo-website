import React from 'react';
import "./style.css";
import 'aos/dist/aos.css';

const MiddleComponent = () => {
  return (
    <div className="container-box box-2">
      <div className="min-container" data-aos="fade-up" data-aos-delay="300">
        <div className="min-box-1">
          EO Kolkata is hosting the next RiE
        </div>
        <div className="min-box-2" data-aos="fade-up" data-aos-delay="300">
        <img src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Feb0913ee-87e0-4c98-b9c4-fbbabcb14fec%2F2IiYm7c0DRkBYXvvrMbm1MKf7C5_Howrah-Bridge.png%3Fbucket%3Ddocument&w=640&q=100" 
        alt="bridge-image" />
        </div>
      </div>
      <div className="min-container-1" data-aos="fade-up" data-aos-delay="300">
        
          <span className='text-size'>and we aim to create an <span className='text-colors'> IMMERSIVE HOLISTIC DISRUPTIVE  </span> experience </span>
      </div>
      
    </div>
  )
}

export default MiddleComponent