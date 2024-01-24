import React from 'react';
import './../../Style/log-register.css'
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Input from '../../Components/From/Input';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

export default function Register() {
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
                      element='input'
                      type='text'
                      placeholder='enter your name'
                    />
                    </div>
                    <div className='input-wrap'>
                    <FaUser className='login-icon'/>
                    <Input
                      element='input'
                      type='text'
                      placeholder='enter your username'
                    />
                    </div>
                    <div className='input-wrap'>
                    <MdEmail className='login-icon'/>
                    <Input
                      element='input'
                      type='email'
                      placeholder='enter your email'
                    />
                    </div>
                    <div className='input-wrap'>
                    <FaLock className='login-icon'/>
                    <Input
                      element='input'
                      type='text'
                      placeholder='enter your username'
                    />
                    </div>
                    <button className='login-btn'>login</button>
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
