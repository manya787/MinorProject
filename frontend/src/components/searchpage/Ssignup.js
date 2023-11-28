import React, { useEffect } from 'react';
import "../../App.css";
import "./Ssignup.css";
import {Button} from "./Button";
import logo from "../../images/logo_fly.png";
import Navbar from './Snav';
import Footer from "../mainpage/footer";

const Ssignup = () => {

  return (
    <>
    <Navbar/>
    <div className='topic'>
      <div className='text_t'>Frontend Developer</div>
    </div>

    <div className='container_t'>
    <div className='main'>
      <div className='post_m'>
      <div className='logo'>
        <img src={logo} alt="image"></img>
      </div>

      <div className='post'>
        <h3 className='post_r'></h3>
        <span className='role'>Frontend Developer</span>
        <div className='icon'></div>
        {/* <i class= '' className="zmdi zmdi-city material-icons-name "></i> */}
        <h4 className='comp'>Fly High</h4>
        <i className="zmdi zmdi-pin-drop material-icons-name "></i>
        <span className='loc'>Banglore,Hyderabad,Noida</span> 
      </div> 
    </div>

    <div className='details'>
      <div className='other_d'>
        <div className='startD_c'>
          <div className='startD'>
          <i className="zmdi zmdi-time material-icons-name "></i>
            <span className='startHead'>Start Date</span>
          </div>
          <div className='start_d'>
          <div className='start_date'>Immediately</div>
          </div>
        </div>
        <div className='startD_c'>
          <div className='startD'>
          <i className="zmdi zmdi-calendar-alt material-icons-name "></i>
            <span className='startHead'>Duration</span>
          </div>
          <div className='start_d'>
          <div className='start_date'>2 months</div>
          </div>
        </div>
      </div>

      <div className='other_d'>
        <div className='startD_c'>
          <div className='startD'>
          <i className="zmdi zmdi-money-box material-icons-name "></i>
            <span className='startHead'>Stipend</span>
          </div>
          <div className='start_d'>
          <div className='start_date'>50,000 per month</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <div className='main_content'>
      <div className='about'>About Company</div>
      <div className='compC'>Fly High opened for business on the 3rd of January 2012 to give customers a wide selection of amazingly priced furniture, home, and living products, and a consistently great shopping experience. We are a managed marketplace working closely with nearly a thousand merchant partners to showcase their design skills, craftsmanship, and service orientation to customers across India and the world. Fly High is today India's no. 1 online furniture, home, and living destination, offering products across categories like furniture, home decor, furnishings, kitchen and dining, housekeeping, fitness, leisure, and pet supplies.</div>
      <div className='about'>About Post</div>
      <div className='compC'>As a new client acquisition and key accounts management intern at Fly High, you'll have the unique opportunity to be a part of a leading furniture and home decor e-commerce platform. We're looking for a dynamic individual passionate about sales, marketing, and customer relationship management. With your excellent communication skills, market analysis expertise, and proficiency in MS Office and social media marketing, you'll play a vital role in driving growth and expanding our client base
          Selected intern's day-to-day responsibilities include:
          <br/><br/>1. Conducting market research and analysis to identify potential clients and market trends
          <br/>2. Developing and implementing strategies to acquire new clients and increase sales revenue
          <br/>3. Building relationships with key accounts and managing their needs and expectations
          <br/>4. Assisting in the development and execution of marketing campaigns to attract new customers
          <br/>5. Utilizing social media platforms to promote and enhance brand visibility and engagement
          <br/>6. Collaborating with cross-functional teams to ensure seamless customer onboarding and support
          <br/>7. Providing regular reports and insights on market conditions, competitor activities, and client feedback to help shape business decisions
          <br/><br/>If you thrive in a fast-paced environment, have a knack for building relationships, and are eager to contribute to the success of a leading e-commerce company, this internship is for you. Join us at Fly HIgh and be a part of our exciting journey towards redefining the home decor industry.
          </div>
          <div className='about'>Required Skill(s)</div>
           <div className='skillC'>
            <div className='skilltab'>Effective Communication</div>
            <div className='skilltab'>Market Analysis</div>
            <div className='skilltab'>Effective Communication</div>
           </div>
          
           <div className='about'>Perks</div>
           <div className='skillC'>
            <div className='skilltab'>Certificate</div>
            <div className='skilltab'>Letter of Recommendation</div>
            <div className='skilltab'>Informal Dress Code</div>
           </div>
           <div className='about'>Number of Openings</div>
           <div className='compC'>3</div>
           <div className='about'>Certification(s) Required</div>
           <div className='skillC'>
            <div className='skilltab'>React</div>
            <div className='skilltab'>Next.js</div>
            <div className='skilltab'>Node</div>
           </div>
    </div>
    <Button className="btn_l">Apply Now</Button>
    </div>
    <Footer/>
    </>
  )
}

export default Ssignup;