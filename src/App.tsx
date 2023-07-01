import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Main from './pages/home/Main';
import './App.css';
import { SignIn } from './pages/siginin';
import { SignUp } from './pages/siginup';
import { Todo } from './pages/todo';
import Banner from './pages/home/Banner';
import { getLocalStorageToken } from './utils/auth';
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    //CreateBrowser로 리펙토링 필요
    const access_token = getLocalStorageToken();
    if (access_token) {
      //토큰이 존재할때
      if (location.pathname === '/signin' || location.pathname === '/signup') {
        navigate('/todo');
      }
    } else {
      //존재하지 않을때
      if (location.pathname === '/todo') {
        navigate('/signin');
      }
    }
  }, [location, navigate]);

  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
