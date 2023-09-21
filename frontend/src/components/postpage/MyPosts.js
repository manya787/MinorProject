import React, { useEffect, useState } from 'react';
import "../../App.css";
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const navigate = useNavigate();
 const [userData, setUserData] = useState ({});

  const callMyPost = async () => {
try {
  const res = await fetch('/post', {
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    credentials:"include"
  }); 

  const data = await res.json();
  console.log(data);
  setUserData(data);

  if(res.status !== 200){
    const error = new Error(res.statusText); ;
    throw error;
  }

} catch(err) {
console.log(err);
navigate('/post');   // or MyPosts
}
  }

  useEffect(() => {
    callMyPost();
  } , [] );
  return (
    <>
    <Navbar/>
    <div className="container emp-profile">
      <form method="">
        <div className="row">
          <div className="col-md-4">
            {/* <img></img> */}
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>topic</h5>
              <h6>name</h6>
              <p className="profile-place mt-3 mb-5">work place</p>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home">Details</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
             <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>profession</p>


              </div>
            </div>
            {/* right side data toggle */}
          </div>
        </div>       
      </form>
    </div>
    </>
  )
}

export default MyPosts;