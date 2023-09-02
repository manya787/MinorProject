import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image from "../../images/mainpage.jpg"
import { NavLink } from 'react-router-dom';
import "../../MApp.css";

const Mhome = () => {
    return (
      <>
        <section className='home'>
          <div className='container'>
            <div className='row'>
              <h1>Communicate. Collaborate. Create</h1>
              <p>Where Expertise Meets Experience. A Platform for Project Partnership.</p>
              <div className='button'>
                <button className='primary-btn'>
                  GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                  Know More <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
              <div className="text">Post an Opportunity<NavLink to="/post"></NavLink> </div>
              <div className="text">Need an Opportunity<NavLink to="/search"></NavLink> </div>
              <div className="text">Certifications<NavLink to="/post"></NavLink> </div>
              <figure>
                <img src={image} alt="homepage pic" />
              </figure>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Mhome