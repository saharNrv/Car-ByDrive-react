import React, { useContext } from 'react';
import './../../Style/log-register.css'
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Input from '../../Components/From/Input';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import Button from '../../Components/From/Button';
import { requiredValidator,minValidator,maxValidator,emailValidator } from '../../Validators/Rules';
import { useForm } from '../../Hooks/useForm';
import AutContext from '../../context/AuthContext';


export default function Register() {
 const authContext=useContext(AutContext)

  const[formState, onInputHandler]=useForm({
    name:{
      value:'',
      isValid:false
    },
    username:{
      value:'',
      isValid:false
    },
    email:{
      value:'',
      isValid:false
    },
    password:{
      value:'',
      isValid:false
    },
  },false)


console.log(formState);

const registerNewUser=(event)=>{
  event.preventDefault()
  const newUserInfos={
    name:formState.inputs.name.value,
    username:formState.inputs.username.value,
    email:formState.inputs.email.value,
    password:formState.inputs.password.value,
    userBasket:[]
  }
  

  fetch('http://localhost:3000/users',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newUserInfos)
  }).then(res=>res.json())
    .then(resualt=>{
      console.log(resualt);
      authContext.login(resualt.username,resualt.id)
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
                <span>Register</span>
               </div>
               <div className='form-wrap'>
                <form >
                    <div className='input-wrap'>
                    <FaUser className='login-icon'/>
                    <Input
                      id='name'
                      element='input'
                      type='text'
                      placeholder='enter your name'
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
                    <MdEmail className='login-icon'/>
                    <Input
                     id='email'
                      element='input'
                      type='email'
                      placeholder='enter your email'
                      validations={
                        [
                          requiredValidator(),
                          minValidator(8),
                          emailValidator()
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
                      type='password'
                      placeholder='enter your password'
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
                    <Button type='submit' className='login-btn' onClick={registerNewUser}>login</Button>
                </form>
                <div className='login-info'>
                  <p>Do you have an account already? <Link to='/login' className='log-link'>login</Link></p>
                </div>
               </div>
            </div>
               
        </div>
    
        <Footer/>
      
    </div>
  );
}
