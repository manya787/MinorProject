import React from 'react';
import "../../App.css";
import "./Listview.css";
import Navbar from './Snav';
import styled from "styled-components";
//import FormatPrice from "../Helpers/FormatPrice";
import login1 from "../../images/logo_fly.png";
import {Button} from "./Button";
import { GlobalStyle } from "./GlobalStyles";

const Listview = ({ /*opportunities*/ }) => {
  return (
    <>
    <GlobalStyle/>
    <div className="section">
      <div className="contain grid">
        {/* {products.map((curElem) => {
          const { id, name, image, price, description } = curElem; */}
          {/* return ( */}
            <div className="card grid grid-two-column">
              <figure className='fig'>
                <img className='imgs' src={login1} alt="hi" />
              </figure>

              <div className="card-data">
                <h3><br/>Fly High</h3>
                <p>
                  {/* <FormatPrice price={price} /> */}
                </p>
                <p>Frontend Developer <br/>Work from Home <br/>Delhi ...
                </p>

                {/* <NavLink to={`/singleproduct/${id}`} className="btn-main"> */}
                  <Button className="btn">Read More</Button>
                {/* </NavLink> */}
              </div>
            </div>
          {/* ); */}
        {/* })} */}
      </div>
    </div>
    </>
  );
};


// const Wrapper = styled.section`

//   .contain {
//     max-width: 150rem;
//   }


//   .grid {
//     gap: 3.2rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }
    
//   }`;

export default Listview;
