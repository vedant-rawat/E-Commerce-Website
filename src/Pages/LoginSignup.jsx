import React, { useState } from 'react'
import './CSS/Loginsignup.css'

export const LoginSignup = () => {

  const [state, setState] = useState("Login")

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const login = async()=>{
    console.log("login function running ", formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((resp)=>resp.json()).then((data)=>responseData = data);
    
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    }
    else
    {
      alert(responseData.errors)
    }
  }

  const signup = async()=>{
    console.log("signup function running ", formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((resp)=>resp.json()).then((data)=>responseData = data);
    
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    }
    else
    {
      alert(responseData.errors)
    }

  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className = 'loginsignup-fields'>
          {state === "Sign Up"? <input name = "username" value = {formData.username} onChange={changeHandler} type = "text" placeholder = 'Your Name'/> : <></>}
          <input name = "email" value = {formData.email} onChange={changeHandler} type = "email" placeholder = 'Email ID'/>
          <input name = "password" value = {formData.password} onChange={changeHandler} type = "password" placeholder = 'Password'/>
        </div>
        <button onClick={()=>{state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign Up" ? <p className='loginsignup-login'>Already have an Account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>
        :<p className='loginsignup-login'>Create an Account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}

        <div className="login-signup-agree">
          <input type = 'checkbox' name = '' id   = ''/>
          <p>By clicking, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
