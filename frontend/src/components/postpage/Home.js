import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import image from "./pimages/wave.svg";
import "./home.css";
import lottie from 'lottie-web';

const Home = () => {
      const container = useRef(null)
useEffect(() => {
      lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./homelottie2.json')
      })
}, [])
  return (
    <>
    <Navbar/>    
    <div className="homecontent">
        <div className="hometext">
            <p>Instantly broadcast your project aspirations and dive into a world of endless possibilities.<span> Start collaborating today!</span></p>
            <button className = "homebutton">
                <NavLink to="/login"><a>Get Started</a></NavLink>
            </button>
        </div>
    </div>
    <div className="contanierhomelottie" ref={container}></div>
<div class="wave">
            <figure>
                  <img src={image} alt="waves" />
            </figure>
</div>
    </>
  )
}

export default Home;