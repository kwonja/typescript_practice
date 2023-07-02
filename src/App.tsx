import React, { useEffect } from 'react';
import {useNavigate, useLocation, Outlet } from 'react-router-dom';
import './App.css';
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
      <Outlet/>
    </>
  );
}

export default App;
