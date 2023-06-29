import React,{useEffect} from 'react'
import {Route,Routes,useNavigate,useLocation} from "react-router-dom";
import Main from './pages/home/Main';
import './App.css';
import { SignIn } from './pages/siginin';
import { SignUp } from './pages/siginup/';
import Banner from './pages/home/Banner';
function App() {
  return (
    <>
    <Banner/>
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
