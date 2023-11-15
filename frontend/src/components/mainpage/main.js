import React from 'react';
import {Routes, Route } from "react-router-dom"   // BrowserRouter as Router

import Mhome from './mhome';
import Mservices from './mservices';
import Mhelp from './mhelp';
import Maboutus from './maboutus';
// import Footer from './footer';

import "../../App.css";
import "../../MApp.css";
import PHome from '../postpage/Home';
import Shome from '../searchpage/Shome';
import QHome from '../quizpage/pages/QHome';
import Smessages from '../searchpage/Smessages';
import Slogin from '../searchpage/Slogin';
import Ssignup from '../searchpage/Ssignup';
import { ThemeProvider } from "styled-components";

const Main = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
return (
  <>
  <ThemeProvider theme={theme}>
    <Routes>
          <Route path='/' element={<Mhome />} />
          <Route path='/services' element={<Mservices />} />
          <Route path='/aboutus' element={<Maboutus/>} />
          <Route path='/help' element={<Mhelp />} />
          <Route path='/createhome' element={<PHome />} />
          <Route path='/quiz' element={<QHome />} />
          <Route path='/search' element={<Shome />} />
          <Route path='/slogin' element={<Slogin />} />
          <Route path='/smessages' element={<Smessages />} />
          <Route path='/ssignup' element={<Ssignup />} />
     </Routes>
     </ThemeProvider>
     </>
   )
};

export default Main;