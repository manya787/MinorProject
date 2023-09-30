import React from 'react';
import "../../App.css";
import Navbar from './Navbar';
// import image1 from "./pimages/homeimage/email-icon.png";
// import image2 from "./pimages/homeimage/social-icon1.png";
// import image3 from "./pimages/homeimage/social-icon2.png";
// import image4 from "./pimages/homeimage/social-icon3.png";
// import image5 from "./pimages/homeimage/social-icon4.png";
// import image6 from "./pimages/homeimage/social-icon5.png";
// import image8 from "./pimages/homeimage/wave.svg";
// import "./home.css";

const Home = () => {
  return (
    <>
    <Navbar/>
    <h3>Home</h3><br></br>
    <h2>Welcome to CoLabConnect</h2>
    
    {/* <div className="content">
        <div className="text">
            <p>Libero sunt aut excepturi natus leo etiam <span>corporis lobortis</span> quas nunc semper eius ullam ullam velit voluptas.</p>
            <a href="#" class="btn">Get Started</a>
        </div>
        <div class="img">
            <div class="social-icons">
              <figure>
                  <img src={image2} alt="registration pic1" />
            </figure>
            <figure>
                  <img src={image3} alt="registration pic2" />
            </figure>
            <figure>
                  <img src={image4} alt="registration pic3" />
            </figure>
            <figure>
                  <img src={image5} alt="registration pic4" />
            </figure>
            <figure>
                  <img src={image6} alt="registration pic5" />
            </figure>
            </div>
            <figure>
                  <img src={image1} alt="registration pic" />
            </figure>
        </div>
    </div> */}

{/* <div class="wave">
            <figure>
                  <img src={image8} alt="registration pic" />
            </figure>
</div> */}
    </>
  )
}

export default Home;