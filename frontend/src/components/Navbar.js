import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/collab.png";
import "../App.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} className='logo' alt="logo" ></img></a>
      <p>CoLabConnect</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/messages">Messages</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/posts" role="button" data-bs-toggle="dropdown" aria-expanded="false">Post</a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/mypost">My Posts</NavLink></li>
            <li><NavLink className="dropdown-item" to="/createpost">Create Post</NavLink></li>
            <li><a className="dropdown-divider"></a></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;