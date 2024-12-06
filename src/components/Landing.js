import React from 'react';
import shotPlayed from '../Images/pageImage.png';
import '../Css/LandingStyle.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="mainSection">
      <div className="des">
        <h1>Cricket Analytics And Guide</h1>
        <p>An amazing web application to enhance your batting and bowling skill through the use of AI analysis and integration</p>
      </div>
      <div className="mainImage">
        <img src={shotPlayed} alt="cricekt shot" className='image'/>
      </div>
    </div>
    </>
  )
}

export default LandingPage
