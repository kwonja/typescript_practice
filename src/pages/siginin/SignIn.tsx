import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';
import { setLocalStorage } from '../../utils/auth';
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);

  const handleEmailchange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    if (email.includes('@') && password.length >= 8) {
      //정상 회원가입
      e.preventDefault();
      const SignIn = async () => {
        const response = await login(email, password);
        setLocalStorage(response.data.access_token);
        navigate('/todo');
      };
      SignIn();
    }
  };
  useEffect(() => {
    if (email.includes('@') && password.length >= 8) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [email, password]);
  return (
    <>
      <h2>로그인페이지</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          data-testid="email-input"
          onChange={handleEmailchange}
          placeholder="@ 포함"
        />
        <br />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          data-testid="password-input"
          onChange={handlePasswordChange}
          placeholder="8자리이상"
        />
        <br />
        <button data-testid="signin-button" disabled={!disable}>
          로그인
        </button>
      </form>
    </>
  );
};

export default SignIn;
