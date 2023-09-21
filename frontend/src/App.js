import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Main from './components/mainpage/main';
import Post from './components/postpage/post';

import "./App.css";
import "./MApp.css";

const App = () => {
  return (
    <>
    <Main />
    <Post />
    </>
  )
};

export default App;