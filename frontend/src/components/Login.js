import React from 'react';
import image from "../images/regimages.png";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Login = () => {
  return ( 
  <>
  <section className="sign-in">
    <div className="container mt-5">
    <div className="signin-content">
    <div className="signin-image">
      <figure>
        <img src={image} className="sigimg" alt="registration pic" />
      </figure>
    <NavLink to="/signup" className="signup-image-link">create an Account</NavLink> 
    
      </div>
    <div className="signup-form">
      <h2 className ="form-title">Sign in</h2>
      <form className ="register-form" id="register-from">

      <div className="form-group">
         <label htmlFor="email"> 
         <i className="zmdi zmdi-email material-icons-name "></i> </label>
      <input type="email" name="email" id="email" autoComplete="off"
      placeholder="        Your email" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="password"> 
         <i className="zmdi zmdi-lock material-icons-name "></i> </label>
      <input type="password" name="password" id="password" autoComplete="off"
      placeholder="        Your password" 
      />
      </div>

      <div className="form-group form-button">
        <input type="submit" name="signin" id="signin" className="form-submit" 
        value="Log in"
        />
      </div>
</form>
      </div> 

    </div>
    </div>

  </section>
  </>
    )
}

export default Login;