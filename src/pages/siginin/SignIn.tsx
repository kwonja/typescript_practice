import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';
import { setLocalStorage } from '../../utils/auth';
import { checkEmail, checkPassword } from '../../utils/validation';
import { Input, Label, SignBtn, SignForm, Title } from './style';
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailchange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    //정상 회원가입
    e.preventDefault();
    const Login = async () => {
      const response = await login(email, password);
      if (response) {
        if (response.status === 200) {
          alert('로그인에 성공하셨습니다.');
          setLocalStorage(response.data.access_token);
          navigate('/todo');
        } else if (response.status === 404) {
          alert(response.data.message);
        }
      } else {
        alert('로그인에 실패했습니다');
      }
    };
    Login();
  };
  return (
    <>
      <Title>로그인페이지</Title>
      <SignForm onSubmit={handleSubmit}>
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          data-testid="email-input"
          onChange={handleEmailchange}
          placeholder="@ 포함"
        />
        <br />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          data-testid="password-input"
          onChange={handlePasswordChange}
          placeholder="8자리이상"
        />
        <br />
        <SignBtn
          data-testid="signin-button"
          disabled={checkEmail(email) && checkPassword(password) ? false : true}
        >
          로그인
        </SignBtn>
      </SignForm>
    </>
  );
};

export default SignIn;
