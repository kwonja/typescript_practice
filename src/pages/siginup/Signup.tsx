import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../apis/auth';
import { checkEmail, checkPassword } from '../../utils/validation';
import { Input, Label, SignBtn, SignForm, Title } from './style';
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailchange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    //정상 회원가입
    e.preventDefault();
    const response = await signup(email, password);

    if (response) {
      if (response.status === 201) {
        alert('회원가입에에 성공했습니다');
      } else if (response.status === 400) {
        alert(response.data.message);
      }
      navigate('/signin');
    } else {
      alert('회원가입에 실패했습니다.');
    }
  };
  return (
    <>
      <Title>회원가입페이지</Title>
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
          data-testid="signup-button"
          disabled={checkEmail(email) && checkPassword(password) ? false : true}
        >
          회원가입
        </SignBtn>
      </SignForm>
    </>
  );
};

export default Signup;
