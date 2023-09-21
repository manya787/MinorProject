import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Mhome from './mhome';
import Mservices from './mservices';
import Maboutus from './maboutus';
import Mhelp from './mhelp';

import "../../App.css";
import "../../MApp.css";
import Home from '../postpage/Home';

const Main = () => {
return (
  <>
    <Routes>
          <Route path='/' element={<Mhome />} />
          <Route path='/services' element={<Mservices />} />
          <Route path='/aboutus' element={<Maboutus />} />
          <Route path='/help' element={<Mhelp />} />

          <Route path='/createhome' element={<Home />} />
     </Routes>
     </>
   )
};

export default Main;