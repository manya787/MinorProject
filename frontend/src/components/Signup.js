import React from 'react';
import image from "../images/collab4.jpg";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Signup = () => {
  return (
  <>
  <section className="signup">
    <div className="container mt-5">
    <div className="signup-content">
    <div className="signup-form">
      <h2 className ="form-title">sign up</h2>
      <form className ="register-form" id="register-from">
         
         <div className="form-group">
         <label htmlFor="name"> 
         <i className="zmdi zmdi-account material-icons-name "></i> 
         </label>
      <input type="text" name="name" id="name" autoComplete="off"
      placeholder="        Your name" 
      />
      </div> 

      <div className="form-group">
         <label htmlFor="email"> 
         <i className="zmdi zmdi-email material-icons-name "></i> </label>
      <input type="email" name="email" id="email" autoComplete="off"
      placeholder="        Your email" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="phone"> 
         <i className="zmdi zmdi-phone-in-talk material-icons-name "></i> </label>
      <input type="number" name="phone" id="phone" autoComplete="off"
      placeholder="        Your phone" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="work"> 
         <i className="zmdi zmdi-slideshow material-icons-name "></i> </label>
      <input type="text" name="work" id="work" autoComplete="off"
      placeholder="        Your Profession" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="password"> 
         <i className="zmdi zmdi-lock material-icons-name "></i> </label>
      <input type="password" name="password" id="password" autoComplete="off"
      placeholder="        Your password" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="cpassword"> 
         <i className="zmdi zmdi-lock material-icons-name "></i> </label>
      <input type="text" name="cpassword" id="cpassword" autoComplete="off"
      placeholder="        Confirm your password" 
      />
      </div>
      <div className="form-group form-button">
        <input type="submit" name="signup" id="signup" className="form-submit" 
        value="Register"
        />
      </div>
</form>
      </div>
      
      <div className="signup-image">
      <figure>
        <img src={image} className="sigimg" alt="registration pic" />
      </figure>
    <NavLink to="/login" className="signup-image-link">I am already registerd</NavLink> 
    
      </div>

    </div>
    </div>

  </section>
  
  
  
  
  </>
  
    )
}

export default Signup;