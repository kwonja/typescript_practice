import React, { useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../apis/auth';
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(true);

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
      const response = await signup(email, password);

      if (response) {
        if (response.status === 201) {
          alert('회원가입에에 성공했습니다');
          navigate('/signin');
        } else if (response.status === 400) {
          alert(response.data.message);
        }
      } else {
        alert('로그인에 실패했습니다.');
      }
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
      <h2>회원가입페이지</h2>
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
        <button data-testid="signup-button" disabled={!disable}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default Signup;
