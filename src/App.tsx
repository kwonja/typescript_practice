import React, { useEffect } from 'react';
import { useNavigate, useLocation,Routes,Route} from 'react-router-dom';
import './App.css';
import Banner from './pages/home/Banner';
import Main from './pages/home/Main';
import Signup from './pages/siginup/Signup';
import { SignIn } from './pages/siginin';
import Todo from './pages/todo/Todo';
import { getLocalStorageToken } from './utils/auth';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect( ()=>{
    const access_token = getLocalStorageToken();
    if(access_token) //토큰이 존재할때
    {
    if(location.pathname ==="/signin" || location.pathname ==="/signup")
    {
      navigate("/todo")
    }
    }
    else{ //존재하지 않을때
      if(location.pathname === "/todo")
    {
      navigate("/signin")
    }
    }
  },[location,navigate])

  return (
    <>
    <Banner/>
      <Routes>
        <Route path ="/" element={<Main/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;