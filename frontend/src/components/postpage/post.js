import React, { createContext, useReducer} from 'react';
import {Routes, Route } from "react-router-dom"
// import { useDispatch } from 'react-redux';

import Home from './Home';
import Messages from './Messages';
import MyPosts from './MyPosts';
import CreatePost from './CreatePost';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Errorpage from './errorpage';
import "../../App.css";
import {initialState, reducer} from "./UseReducer";

// contextapi
const obj = {}
export const UserContext = createContext(obj);

const Routing = () => {
  return(
<Routes>
           <Route path='/home' element={<Home />} />
           <Route path='/messages' element={<Messages />} />
           <Route path='/mypost' element={<MyPosts />} />
           <Route path='/createpost' element={<CreatePost />} />
           <Route path='/login' element={<Login />} />
           <Route path='/logout' element={<Logout />} />
           <Route path='/signup' element={<Signup />} />
           <Route path='/errorpage' element={<Errorpage />} />  
     </Routes>
  
   )
    };
// const dispatch = useDispatch();
const Post = () => {
  //const UserProvider = ({Routing }) => {      // extra by me to tackle error
  const [state,dispatch] = useReducer(reducer, initialState)

return (
  <>
  <UserContext.Provider value={{state, dispatch}}>       
<Routing/>
     </UserContext.Provider>
     </>
   );
}
//}
export default Post;
