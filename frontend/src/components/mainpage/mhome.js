import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image from "../../images/mainpage.jpg"
import { NavLink } from 'react-router-dom';
import "../../MApp.css";
import Mnavbar from './mnav';

const Mhome = () => {
    return (
      <>
      <Mnavbar/>
        <section className='home'>
          <div className='container'>
            <div className='row'>
              <h1>Communicate. Collaborate. Create</h1>
              <p>Where Expertise Meets Experience. A Platform for Project Partnership.</p>
              <div className='button'>
                <button className='primary-btn'>
                <NavLink to="/services">GET STARTED</NavLink><i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                <NavLink to="/aboutus">Know More</NavLink> <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
              <NavLink to="/createhome">Post an Opportunity</NavLink>
              <NavLink to="/search">Need an Opportunity</NavLink>
              <NavLink to="/post">Certifications</NavLink>
              <figure>
                <img className="homeimg" src={image} alt="homepage pic" />
              </figure>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Mhome