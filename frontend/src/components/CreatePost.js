import React from 'react';
import image from "../images/regimages.png";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Createpost = () => {
  return (
  <>
  <section className="createpost">
    <div className="container mt-5">
    <div className="createpost-content">
    <div className="createpost-form">
      <h2 className ="form-title">Createpost</h2>
      <form className ="register-form" id="register-from">
         
      <div className="form-group">
         <label htmlFor="topic"> 
         <i className="zmdi zmdi-assignment material-icons-name "></i> 
         </label>
      <input type="text" name="topic" id="topic" autoComplete="off"
      placeholder="        Work Topic" 
      />
      </div> 

         <div className="form-group">
         <label htmlFor="name"> 
         <i className="zmdi zmdi-account-box material-icons-name "></i> 
         </label>
      <input type="text" name="name" id="name" autoComplete="off"
      placeholder="        Name" 
      />
      </div> 

      <div className="form-group">
         <label htmlFor="profession"> 
         <i className="zmdi zmdi-graduation-cap material-icons-name "></i> </label>
      <input type="profession" name="profession" id="profession" autoComplete="off"
      placeholder="        Your profession" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="workplace"> 
         <i className="zmdi zmdi-pin-drop material-icons-name "></i> </label>
      <input type="text" name="workplace" id="workplace" autoComplete="off"
      placeholder="        Workplace" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="About"> 
         <i className="zmdi zmdi-city material-icons-name "></i> </label>
      <input type="text" name="About" id="About" autoComplete="off"
      placeholder="        About Us" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="requiredpost"> 
         <i className="zmdi zmdi-library material-icons-name "></i> </label>
      <input type="requiredpost" name="requiredpost" id="requiredpost" autoComplete="off"
      placeholder="        Required Post" 
      />
      </div>
       
      <div className="form-group">
         <label htmlFor="skillsrequired"> 
         <i className="zmdi zmdi-badge-check material-icons-name "></i> </label>
      <input type="skillsrequired" name="skillsrequired" id="skillsrequired" autoComplete="off"
      placeholder="        Skills required" 
      />
      </div>
       
      <div className="form-group">
         <label htmlFor="numberofopenings"> 
         <i className="zmdi zmdi-seat material-icons-name "></i> </label>
      <input type="numberofopenings" name="numberofopenings" id="numberofopenings" autoComplete="off"
      placeholder="        Number of openings" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="stipend"> 
         <i className="zmdi zmdi-money-box material-icons-name "></i> </label>
      <input type="stipend" name="stipend" id="stipend" autoComplete="off"
      placeholder="        Stipend" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="duration"> 
         <i className="zmdi zmdi-calendar-alt material-icons-name "></i> </label>
      <input type="duration" name="duration" id="duration" autoComplete="off"
      placeholder="        Duration" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="startdate"> 
         <i className="zmdi zmdi-time material-icons-name "></i> </label>
      <input type="startdate" name="startdate" id="startdate" autoComplete="off"
      placeholder="        Startdate" 
      />
      </div>
      
      <div className="form-group">
         <label htmlFor="additionalperks"> 
         <i className="zmdi zmdi-collection-bookmark material-icons-name "></i> </label>
      <input type="additionalperks" name="additionalperks" id="additionalperks" autoComplete="off"
      placeholder="        Perks" 
      />
      </div>
      
      <div className="form-group">
         <label htmlFor="email"> 
         <i className="zmdi zmdi-email material-icons-name "></i> </label>
      <input type="email" name="email" id="email" autoComplete="off"
      placeholder="        Email" 
      />

      </div>
      <div className="form-group">
         <label htmlFor="linkedin"> 
         <i className="zmdi zmdi-linkedin-box material-icons-name "></i> </label>
      <input type="linkedin" name="linkedin" id="linkedin" autoComplete="off"
      placeholder="        Linkedin" 
      />
      </div>


      <div className="form-group form-button">
        <input type="submit" name="createpost" id="createpost" className="form-submit" 
        value="Create"
        />
      </div>
</form>
      </div>
      
      <div className="signup-image">
      <figure>
        <img src={image} className="sigimg" alt="registration pic" />
      </figure>
    <NavLink to="/createpost" className="signup-image-link">My Post</NavLink> 
    
      </div>

    </div>
    </div>

  </section>
  
  
  </>
  
    )
}

export default Createpost;