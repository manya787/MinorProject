import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './Home';
import Messages from './Messages';
import MyPosts from './MyPosts';
import CreatePost from './CreatePost';
import Login from './Login';
import Signup from './Signup';
import "../../App.css";

const Post = () => {
return (
  <>
    <Routes>
           <Route path='/home' element={<Home />} />
           <Route path='/messages' element={<Messages />} />
           <Route path='/mypost' element={<MyPosts />} />
           <Route path='/createpost' element={<CreatePost />} />
           <Route path='/login' element={<Login />} />
           <Route path='/signup' element={<Signup />} />
     </Routes>
     </>
   )
};

export default Post;