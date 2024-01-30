import React, { useContext, useEffect, useState } from 'react';
import './login.css'
import './../../Style/log-register.css'
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Input from '../../Components/From/Input';
import { Link } from 'react-router-dom';
import { requiredValidator,minValidator,maxValidator,emailValidator } from '../../Validators/Rules';
import { useForm } from '../../Hooks/useForm';
import AutContext from '../../context/AuthContext';
import Button from '../../Components/From/Button';
export default function Login() {

const[userID,setUsetID]=useState([])

 const authContext=useContext(AutContext)

  const[formState,onInputHandler]=useForm({
         username:{
          value:'',
          isValid:false
         },
         password:{
          value:'',
          isValid:false
         },
  },false)
  useEffect(()=>{
 

   fetch('http://localhost:3000/users')
        .then(res=>res.json())
        .then(login=>{
          setUsetID(login)
        })

        console.log(userID);
  },[])
  const loginHandler=(event)=>{
    event.preventDefault()
    

    const newLoginUser={
      usernam:formState.inputs.username.value,
      password:formState.inputs.password.value,
      userID:formState.inputs.password.value,
    }
    console.log(newLoginUser);

    fetch(`http://localhost:3000/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newLoginUser)
    }).then(res=>res.json())
      .then(resualt=>{
      authContext.login(resualt.username,resualt.userID)

      })

  }


  return (
    <div>
        <Topbar/>
        <div className="login">
                <img src="/image/aboutcar-2.jpeg" alt="login image" className='login-img'/>
                <div className='login-bg'></div>
            <div className='login-wrap'>
               <div className='login-header'>
               <h2>Welcome My Drive</h2>
                <span>Login</span>
               </div>
               <div className='form-wrap'>
                <form >
                    <div className='input-wrap'>
                    <FaUser className='login-icon'/>
                    <Input
                      id='username'
                      element='input'
                      type='text'
                      placeholder='enter your username'
                      validations={
                        [
                          requiredValidator(),
                          minValidator(8),
                          maxValidator(20)
                        ]
                      }
                      onInputHandler={onInputHandler}
                    />
                    </div>
                    <div className='input-wrap'>
                    <FaLock className='login-icon'/>
                    <Input
                      id='password'
                      element='input'
                      type='text'
                      placeholder='enter your username'
                      validations={
                        [
                          requiredValidator(),
                          minValidator(8),
                          maxValidator(16)
                        ]
                      }
                      onInputHandler={onInputHandler}
                    />
                    </div>
                    <Button className='login-btn' type='submit' onClick={loginHandler}>login</Button>
                </form>
                <div className='login-info'>
                  <p>Have you already registered? <Link to='/register' className='log-link'>register</Link></p>
                </div>
               </div>
            </div>
        </div>
    
        <Footer/>
      
    </div>
  );
}
