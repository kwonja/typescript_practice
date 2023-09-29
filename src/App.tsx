import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Banner from './pages/home/Banner';
import { getLocalStorageToken } from './utils/auth';
import Main from './pages/home/Main';
import { SignUp } from './pages/siginup';
import { SignIn } from './pages/siginin';
import TodoList from './pages/todo/Todo';
import ErrorPage from './pages/home/ErrorPage';
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = getLocalStorageToken();
    if (access_token) {
      //토큰이 존재할때
      if (location.pathname === '/signin' || location.pathname === '/signup') {
        alert('로그아웃후 이용해주세요');
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
      <Routes>
        <Route path="/" element={<Banner />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/todo" element={<TodoList />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
