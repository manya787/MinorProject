import React, {useState} from 'react';
import image from "../images/regimages.png";
import { NavLink, useNavigate } from 'react-router-dom';
import "../App.css";

const Createpost = () => {
   const navigate = useNavigate();
   const [post, setUser] = useState({
      Topic:"" ,Name:"",Profession:"",Workplace:"",About:"",Requirepost:"",Skillsrequired:"",Numberofopenings:"",Stipend:"",Duration:"",Start:"",Perks:"",Email:"",Linkedin:"",
   }); 
  
 let name, value;
 const handleInputs = (e) => {
   console.log(e);
   name = e.target.name;
   value = e.target.value;
   setUser({...post, [name]:value})
 }
 
  const PostData = async (e) => {
      e.preventDefault();
 
      const { Topic ,Name,Profession,Workplace,About,Requirepost,Skillsrequired,Numberofopenings,Stipend,Duration,Start,Perks,Email,Linkedin } = post;
 
      const res = await fetch("/createpost", {
       method: "POST",
       headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
 
         Topic,Name,Profession,Workplace,About,Requirepost,Skillsrequired,Numberofopenings,Stipend,Duration,Start,Perks,Email,Linkedin 
  
         })
 });
 
      const data = await res.json();
      if(data.status === 422 || !data){
       window.alert("Invalid Post Creation ");
       console.log("Invalid Post Creation");
      } else {
       window.alert("Post Created Successfully");
       console.log("Invalid Post Creation");   
       navigate("/createpost");
      }
  }  
  
   return (
  <>
  <section className="createpost">
    <div className="container mt-5">
    <div className="createpost-content">
    <div className="createpost-form">
      <h2 className ="form-title">Createpost</h2>
      <form method="POST" className ="register-form" id="register-from">
         
      <div className="form-group">
         <label htmlFor="topic"> 
         <i className="zmdi zmdi-assignment material-icons-name "></i> 
         </label>
      <input type="text" name="Topic" id="Topic" autoComplete="off"
      value={post.Topic}
      onChange={handleInputs}
      placeholder="        Work Topic" 
      />
      </div> 

         <div className="form-group">
         <label htmlFor="name"> 
         <i className="zmdi zmdi-account-box material-icons-name "></i> 
         </label>
      <input type="text" name="Name" id="Name" autoComplete="off"
      value={post.Name}
      onChange={handleInputs}
      placeholder="        Name" 
      />
      </div> 

      <div className="form-group">
         <label htmlFor="profession"> 
         <i className="zmdi zmdi-graduation-cap material-icons-name "></i> </label>
      <input type="profession" name="Profession" id="Profession" autoComplete="off"
      value={post.Profession}
      onChange={handleInputs}
      placeholder="        Your profession" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="workplace"> 
         <i className="zmdi zmdi-pin-drop material-icons-name "></i> </label>
      <input type="text" name="Workplace" id="Workplace" autoComplete="off"
      value={post.Workplace}
      onChange={handleInputs}
      placeholder="        Workplace" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="About"> 
         <i className="zmdi zmdi-city material-icons-name "></i> </label>
      <input type="text" name="About" id="About" autoComplete="off"
      value={post.About}
      onChange={handleInputs}
      placeholder="        About Us" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="requiredpost"> 
         <i className="zmdi zmdi-library material-icons-name "></i> </label>
      <input type="requiredpost" name="Requiredpost" id="Requiredpost" autoComplete="off"
      value={post.Requirepost}
      onChange={handleInputs}
      placeholder="        Required Post" 
      />
      </div>
       
      <div className="form-group">
         <label htmlFor="skillsrequired"> 
         <i className="zmdi zmdi-badge-check material-icons-name "></i> </label>
      <input type="skillsrequired" name="Skillsrequired" id="Skillsrequired" autoComplete="off"
      value={post.Skillsrequired}
      onChange={handleInputs}
      placeholder="        Skills required" 
      />
      </div>
       
      <div className="form-group">
         <label htmlFor="numberofopenings"> 
         <i className="zmdi zmdi-seat material-icons-name "></i> </label>
      <input type="numberofopenings" name="Numberofopenings" id="Numberofopenings" autoComplete="off"
      value={post.Numberofopenings}
      onChange={handleInputs}
      placeholder="        Number of openings" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="stipend"> 
         <i className="zmdi zmdi-money-box material-icons-name "></i> </label>
      <input type="stipend" name="Stipend" id="Stipend" autoComplete="off"
      value={post.Stipend}
      onChange={handleInputs}
      placeholder="        Stipend" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="duration"> 
         <i className="zmdi zmdi-calendar-alt material-icons-name "></i> </label>
      <input type="duration" name="Duration" id="Duration" autoComplete="off"
      value={post.Duration}
      onChange={handleInputs}
      placeholder="        Duration" 
      />
      </div>

      <div className="form-group">
         <label htmlFor="startdate"> 
         <i className="zmdi zmdi-time material-icons-name "></i> </label>
      <input type="startdate" name="Start" id="Start" autoComplete="off"
      value={post.Start}
      onChange={handleInputs}
      placeholder="        Startdate" 
      />
      </div>
      
      <div className="form-group">
         <label htmlFor="additionalperks"> 
         <i className="zmdi zmdi-collection-bookmark material-icons-name "></i> </label>
      <input type="additionalperks" name="Perks" id="Perks" autoComplete="off"
      value={post.Perks}
      onChange={handleInputs}
      placeholder="        Perks" 
      />
      </div>
      
      <div className="form-group">
         <label htmlFor="email"> 
         <i className="zmdi zmdi-email material-icons-name "></i> </label>
      <input type="email" name="Email" id="Email" autoComplete="off"
      value={post.Email}
      onChange={handleInputs}
      placeholder="        Email" 
      />

      </div>
      <div className="form-group">
         <label htmlFor="linkedin"> 
         <i className="zmdi zmdi-linkedin-box material-icons-name "></i> </label>
      <input type="linkedin" name="Linkedin" id="Linkedin" autoComplete="off"
      value={post.Linkedin}
      onChange={handleInputs}
      placeholder="        Linkedin" 
      />
      </div>
      <div className="form-group form-button">
        <input type="submit" name="createpost" id="createpost" className="form-submit" 
        value="Create" onClick={PostData}
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