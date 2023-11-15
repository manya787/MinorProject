import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './Shome';
import Smessages from './Smessages'
import MySearch from './Interests';
import Create from './CreateSearch';
import Login from './Slogin';
import Signup from './Ssignup';
import "../../App.css";

const Post = () => {
return (
  <>
    <Routes>
           <Route path='/search' element={<Home />} />
           <Route path='/Smessages' element={< Smessages/>} />
           <Route path='/Interests' element={<MySearch />} />
           <Route path='/CreateSearch' element={<Create />} />
           <Route path='/Slogin' element={<Login />} />
           <Route path='/Ssignup' element={<Signup />} />
     </Routes>
     </>
   )
};

export default Post;