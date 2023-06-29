import React,{useEffect,useState} from 'react'
import {useNavigate } from "react-router-dom";
import { signup } from '../../apis/auth';
const Signup = () =>{
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [disable,setDisable]=useState(true)

    const handleEmailchange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
      };
    const handleSubmit =  async(e : React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if (email.includes('@') && password.length >= 8) //정상 회원가입
        {
        signup(email,password)
        navigate("/signin");
    }
    }
    useEffect( ()=>{

        if (email.includes('@') && password.length >= 8) 
        {
            setDisable(true)
        } 
        else{
            setDisable(false)
        }

    },[email,password])
  return (
    <>
    <h2>회원가입페이지</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor='email'>이메일</label>
    <input id="email" data-testid="email-input"  onChange={handleEmailchange} placeholder='@ 포함'/><br/>
    <label htmlFor='password'>비밀번호</label>
    <input id ="password" data-testid="password-input" onChange={handlePasswordChange} placeholder='8자리이상'/><br/>
    <button data-testid="signup-button" disabled={!disable}>회원가입</button>
    </form>
    </>
  )
}

export default Signup;