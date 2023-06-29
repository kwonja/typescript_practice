import React,{useEffect} from 'react'
import {Route,Routes,useNavigate,useLocation} from "react-router-dom";
import Main from './components/Main';
import './App.css';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/signup';
function App() {
  return (
    <>
    <Routes>
        <Route path ="/" element={<Main/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        {/* <Route path="/todo" element={<Todo />}></Route> */}
    </Routes>
    </>
  );
}

export default App;
