import React from 'react';
import "../../App.css";
import "./Smessages.css";
import Navbar from './Snav';
import styled from "styled-components";
import FilterSection from "./Filtersection";
import Listview from "./Listview";
import Sort from './Sort';


const Smessages = () => {
  return (
    <>
    <Navbar/>

    <div className='wrapper'>
      <div className="container_h grid grid-filter-column">
        <div className='filter_s'>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <Listview />
          </div>
        </section>
      </div>
    </div>
    
    </>
  );
};



export default Smessages;