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
      <h2 className ="form-title">sign up</h2>
      <form className ="register-form" id="register-from">
         
      <div className="form-group">
         <label htmlFor="topic"> 
         <i className="zmdi zmdi-topic material-icons-name "></i> 
         </label>
      <input type="text" name="topic" id="topic" autoComplete="off"
      placeholder="Your topic" 
      />
      </div> 

         <div className="form-group">
         <label htmlFor="name"> 
         <i className="zmdi zmdi-account material-icons-name "></i> 
         </label>
      <input type="text" name="name" id="name" autoComplete="off"
      placeholder="Your name" 
      />
      </div> 

      <div className="form-group">
         <label htmlFor="profession"> 
         <i className="zmdi zmdi-profession material-icons-name "></i> </label>
      <input type="profession" name="profession" id="profession" autoComplete="off"
      placeholder="Your profession" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="workplace"> 
         <i className="zmdi zmdi-workplace material-icons-name "></i> </label>
      <input type="text" name="workplace" id="workplace" autoComplete="off"
      placeholder="Your workplace" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="About"> 
         <i className="zmdi zmdi-About material-icons-name "></i> </label>
      <input type="text" name="About" id="About" autoComplete="off"
      placeholder="About" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="requiredpost"> 
         <i className="zmdi zmdi-About material-icons-name "></i> </label>
      <input type="requiredpost" name="requiredpost" id="requiredpost" autoComplete="off"
      placeholder="Intern/Job/Project/Startup" 
      />
      </div>
       
      <div className="form-group">
         <label htmlFor="skillsrequired"> 
         <i className="zmdi zmdi-About material-icons-name "></i> </label>
      <input type="skillsrequired" name="skillsrequired" id="skillsrequired" autoComplete="off"
      placeholder="Language" 
      />
      </div>
       
      <div className="form-group">
         <label htmlFor="stipend"> 
         <i className="zmdi zmdi-money material-icons-name "></i> </label>
      <input type="stipend" name="stipend" id="stipend" autoComplete="off"
      placeholder="stipend" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="duration"> 
         <i className="zmdi zmdi-time material-icons-name "></i> </label>
      <input type="duration" name="duration" id="duration" autoComplete="off"
      placeholder="duration" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="startdate"> 
         <i className="zmdi zmdi-date material-icons-name "></i> </label>
      <input type="startdate" name="startdate" id="startdate" autoComplete="off"
      placeholder="startdate" 
      />
      </div>
      
      <div className="form-group">
         <label htmlFor="additionalperks"> 
         <i className="zmdi zmdi-perks material-icons-name "></i> </label>
      <input type="additionalperks" name="additionalperks" id="additionalperks" autoComplete="off"
      placeholder="Certificate/Equity/opportunities" 
      />
      </div>
      
      <div className="form-group">
         <label htmlFor="email"> 
         <i className="zmdi zmdi-email material-icons-name "></i> </label>
      <input type="email" name="email" id="email" autoComplete="off"
      placeholder="Your email" 
      />

      </div>
      <div className="form-group">
         <label htmlFor="linkedin"> 
         <i className="zmdi zmdi-linkedin material-icons-name "></i> </label>
      <input type="linkedin" name="linkedin" id="linkedin" autoComplete="off"
      placeholder="Your linkedin" 
      />
      </div>


      <div className="form-group form-button">
        <input type="submit" name="signup" id="signup" className="form-submit" 
        value="register"
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