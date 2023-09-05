import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../App.css";

const Createpost = () => {
   const navigate = useNavigate();
   const [post, setUser] = useState({
      Topic:"" ,Name:"",Profession:"",Workplace:"",Aboutcompany:"",Requirepost:"",Aboutpost:"",Skillsrequired:"",Certificationsrequired:"",Numberofopenings:"",Stipend:"",Duration:"",StartDate:"",Perks:"",Email:"",Linkedin:"",
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
 
      const { Topic,Name,Profession,Workplace,Aboutcompany,Requirepost,Aboutpost,Skillsrequired,Certificationsrequired,Numberofopenings,Stipend,Duration,StartDate,Perks,Email,Linkedin } = post;
 
      const res = await fetch("/createpost", {
       method: "POST",
       headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
 
         Topic,Name,Profession,Workplace,Aboutcompany,Requirepost,Aboutpost,Skillsrequired,Certificationsrequired,Numberofopenings,Stipend,Duration,StartDate,Perks,Email,Linkedin 
  
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
   <div className="createp">
   <body>
      <div className="containerp">
         <header>Create Post</header>

         <form method="POST" className ="register-form" id="register-from">

          <span className="titlep">Work Details</span>     
            <div className="fields">
               <div className="input-field">
                  <label><i className="zmdi zmdi-assignment material-icons-name "></i> Work Topic</label>
                  <input type="text" name="Topic" id="Topic" autoComplete="off"
                  value={post.Topic}
                  onChange={handleInputs}
                  placeholder="Enter Work Topic" 
                  />
               </div>

               <div className="input-field">
                  <label><i className="zmdi zmdi-city material-icons-name "></i> About Company</label>                  
                  <input type="text" name="Aboutcompany" id="Aboutcompany" autoComplete="off"
                  value={post.Aboutcompany}
                  onChange={handleInputs}
                  placeholder="About Your Company" 
                  />
               </div>

               <div className="input-field">
                  <label><i className="zmdi zmdi-pin-drop material-icons-name "></i> Workplace</label>
                  <input type="text" name="Workplace" id="Workplace" autoComplete="off"
                  value={post.Workplace}
                  onChange={handleInputs}
                  placeholder="Enter Your Workplace"
                  />
               </div>

               <div className="input-field">
                  <label> <i className="zmdi zmdi-library material-icons-name "></i> Required Post</label>                 
                  <input type="text" name="Requirepost" id="Requirepost" autoComplete="off"
                  value={post.Requirepost}
                  onChange={handleInputs}
                  placeholder="Enter The Available Post"
                  />
               </div>

               <div className="input-field">
                  <label> <i className="zmdi zmdi-library material-icons-name "></i> About Post</label>                 
                  <input type="text" name="Aboutpost" id="Aboutpost" autoComplete="off"
                  value={post.Aboutpost}
                  onChange={handleInputs}
                  placeholder="Describe Available Post"
                  />
               </div>
           
               <div className="input-field">
                  <label><i className="zmdi zmdi-assignment material-icons-name "></i> Skills Required</label>                  
                  <input type="text" name="Skillsrequired" id="Skillsrequired" autoComplete="off"
                  value={post.Skillsrequired}
                  onChange={handleInputs}
                  placeholder="Enter Required Skills" 
                  />
               </div>
               
               <div className="input-field">
                  <label><i className="zmdi zmdi-assignment material-icons-name "></i> Certifications Required</label>                  
                  <input type="text" name="Certificationsrequired" id="Certificationsrequired" autoComplete="off"
                  value={post.Certificationsrequired}
                  onChange={handleInputs}
                  placeholder="Enter Required Certifications" 
                  />
               </div>

               <div className="input-field">
                  <label><i className="zmdi zmdi-seat material-icons-name "></i> Number of Openings</label>                  
                <input type="number" name="Numberofopenings" id="Numberofopenings" autoComplete="off"
                  value={post.Numberofopenings}
                  onChange={handleInputs}
                  placeholder="Number of openings" 
                  />
               </div>

               <div className="input-field">
                  <label><i className="zmdi zmdi-money-box material-icons-name "></i> Stipend</label>                  
                 <input type="number" name="Stipend" id="Stipend" autoComplete="off"
                 value={post.Stipend}
                 onChange={handleInputs}
                 placeholder="Enter Stipend"  
                  />
               </div>

               <div className="input-field">
                  <label><i className="zmdi zmdi-collection-bookmark material-icons-name "></i> Perks</label>                  
                 <input type="text" name="Perks" id="Perks" autoComplete="off"
                 value={post.Perks}
                 onChange={handleInputs}
                 placeholder="Enter perks provided" 
                            />
                         </div>
                     
                  <div className="input-field">
                     <label><i className="zmdi zmdi-calendar-alt material-icons-name "></i> Duration</label>                  
                 <input type="text" name="Duration" id="Duration" autoComplete="off"
                 value={post.Duration}
                 onChange={handleInputs}
                 placeholder="Enter Duration of work" 
                  />
               </div>
           
               <div className="input-field">
                  <label><i className="zmdi zmdi-time material-icons-name "></i> Start Date</label>                 
                   <input type="date" name="StartDate" id="StartDate" autoComplete="off"
                   value={post.StartDate}
                   onChange={handleInputs}
                   placeholder="Start Date"
                  />
               </div>
            </div>
            
              {/* Personal Details */}

            <span className="titlep">Personal Details</span>
            <div className="fields">
               <div className="input-field">
                  <label><i className="zmdi zmdi-account-box material-icons-name "></i> Full Name</label>
                  <input type="text" name="Name" id="Name" autoComplete="off"
                  value={post.Name}
                  onChange={handleInputs}
                  placeholder="Enter Your Full Name" 
                  />
               </div>

               <div className="input-field">
                  <label><i className="zmdi zmdi-graduation-cap material-icons-name "></i> Current Profession</label>
                  <input type="text" name="Profession" id="Profession" autoComplete="off"
                  value={post.Profession}
                  onChange={handleInputs}
                  placeholder="Enter Your Profession"  
                  />
               </div>
           
               <div className="input-field">
                  <label> <i className="zmdi zmdi-email material-icons-name "></i> Email</label>                 
                  <input type="email" name="Email" id="Email" autoComplete="off"
                  value={post.Email}
                  onChange={handleInputs}
                  placeholder="Enter your Email"  
                  />
               </div>
           
               <div className="input-field">
                  <label><i className="zmdi zmdi-linkedin-box material-icons-name "></i> Linkedin</label>                  
                 <input type="url" name="Linkedin" id="Linkedin" autoComplete="off"
                 value={post.Linkedin}
                 onChange={handleInputs}
                 placeholder="Your Linkedin" 
                  />
               </div>
         </div>

         <input type="submit" name="createpost" id="createpost" className="form-submit" 
         value="Create Post" onClick={PostData}
         />
 
         </form>
      </div>
   </body>
   </div>
   </>)
}
export default Createpost;