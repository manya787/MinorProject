import React from 'react';
import image from "../images/collab4.jpg";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Login = () => {
  return ( 
  <>
  <div className="login">
  <div className="container">
  <div className="cover">
  <figure>
        <img src={image} alt="registration pic" />
      </figure>
  </div>
    <form className ="register-form" id="register-from">
    <div className="form-content"/>
      <div className="login-form">
        <div className="title">Login</div>
        <div className="input-boxes">
          <div className="input-box">
           <i className="zmdi zmdi-email material-icons-name "></i>
           <input type="email" name="email" id="email" autoComplete="off"
           placeholder="Enter Your email" required/>  
          </div>
          <div className="input-box">
           <i className="zmdi zmdi-lock material-icons-name "></i>
           <input type="password" name="password" id="password" autoComplete="off"
           placeholder="Your password" required/>
          </div>

          <div className="text"><a href="#">Forgot password?</a></div>
          <div className="button input-box">
          <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
          </div>
          <div className="text">Don't have an account?<NavLink to="/signup"><a className="link">Signup now</a></NavLink> </div>
        </div>
      </div>
    </form>
  </div>
  </div>

  </>
    )
}

export default Login;