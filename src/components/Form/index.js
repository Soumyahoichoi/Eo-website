import React,{useRef, useState} from 'react';
import "./style.css";
import 'aos/dist/aos.css';
import logo from "./../../asset/logo.png";
import video from "./../../asset/videos.mp4";
// import axios from 'axios';
// import firebase from '../utils/firebase';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../utils/firebase";
const Form = () => {

  // const playerRef = useRef(null);
  const [email,setEmail] = useState("");
  const [isValid,setIsValid] = useState(false);
  const [alert,setAlert] = useState("");
  let message = "";

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const isEmailValid = emailValidation();
    setIsValid(isEmailValid);
    isEmailValid ? (message = "Email is Submitted!") : (message = "Email Address not valid!");
    setAlert(message);
    if(isEmailValid){
      try {
        const docRef = await addDoc(collection(db, "SubmittedEmails"), {
          email: email,    
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
  const inputHandler = (e) => {
    setEmail(e.target.value);
    setAlert("");
  }
  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!email || regex.test(email) === false);
  }
 
  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   responsive: true,
  //   fluid: true,
  //   sources: [{
  //     src: "https://ik.imagekit.io/hoichoi/Icons-web/Preview_10_pVuzy6fq1.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1671015931740",
  //     type: 'video/mp4'
  //   }]
  // };

  // const handlePlayerReady = (player) => {
  //   playerRef.current = player;

  //   // You can handle player events here, for example:
  //   player.on('waiting', () => {
  //     // videojs.log('player is waiting');
  //   });

  //   player.on('dispose', () => {
  //     // videojs.log('player will dispose');
  //   });
  // };
  

  return (
    <div className="container-box box-3">
      <div className="min-container-3">
        <div className='text-4'>
          <h1>A <span>Decade </span>later, its time again for Kolkata to be the centre of the<span> EO Universe </span> </h1>
        </div>
        <div className='date'>
        11-14 Jan 2024
        </div>
      </div>
        {/* <div className='video'>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady}  autoplay={true}/>
        </div> */}
        <video  className="video" autoPlay muted controls="controls">
          <source src={video} type="video/mp4"/>
        </video>
      {/* </div> */}
      <div className="min-container-4">
        <div className="form-text" data-aos="fade-up" data-aos-delay="300">
        Drop your email to stay informed and for early birds
        </div>
        <span className={"alert-" + (isValid ? "success" : "danger")}>{alert}</span>
        <div className="form" data-aos="fade-up" data-aos-delay="300">
          <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Email" value={email} onChange={inputHandler}/>
            <button type="submit" className="button">Keep me informed!</button>
           </form>
        </div>
      </div>
      <div className='container-footer' data-aos="fade-up" data-aos-delay="500">
      <div className="logo">
          <img src={logo}
          alt="header-logo" width="180px" height= "180px"/>
      </div>
      </div>
    </div>
  )
}

export default Form