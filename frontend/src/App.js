import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Mnavbar from './components/mainpage/mnav';
import Mhome from './components/mainpage/mhome';
import Mservices from './components/mainpage/mservices';
import Maboutus from './components/mainpage/maboutus';
import Mhelp from './components/mainpage/mhelp';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Messages from './components/Messages';
import MyPosts from './components/MyPosts';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Signup from './components/Signup';
// import errorpage from './components/errorpage';
import "./App.css";
import "./MApp.css";

const App = () => {
  return (
    <>
    {/* <Mnavbar/>
    <Routes>
          <Route path='/' element={<Mhome />} />
          <Route path='/services' element={<Mservices />} />
          <Route path='/aboutus' element={<Maboutus />} />
          <Route path='/help' element={<Mhelp />} />
          <Route path='</errorpage'/>
    </Routes>   */}

    <Navbar/>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/mypost' element={<MyPosts />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='</errorpage'/>
    </Routes>
    </>
  )
}

export default App;