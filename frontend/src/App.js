import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Messages from './components/Messages';
import MyPosts from './components/MyPosts';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Signup from './components/Signup';
import errorpage from './components/errorpage';
import "./App.css";

const App = () => {
  return (
    <>
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