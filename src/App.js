
import './App.css';
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import Carosel from './components/Carosel/index';
import MiddleComponent from "./components/MiddleComponent/index";
import InitialComponent from './components/InitialComponent/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';
function App() {

  useEffect(() => {
    AOS.init({duration: 1500});
  },[])

  return (
    <div className='container'>
      <div data-aos="fade-in">
      <Header/>
      </div>
      <div data-aos="fade-in" data-aos-delay="300">
      <InitialComponent/>
      </div>
      <div data-aos="fade-up" data-aos-delay="600"><MiddleComponent/></div>
      <div data-aos="fade-up" data-aos-delay="600"><Carosel/></div>
      <div data-aos="fade-up" data-aos-delay="600"><Form/></div>
      
    </div>
  );
}

export default App;
