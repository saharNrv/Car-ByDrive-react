import React from 'react';
import './login.css'
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Login() {
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
                    <input type="text" placeholder='enter your username' />
                    </div>
                    <div className='input-wrap'>
                    <FaLock className='login-icon'/>
                    <input type="text" placeholder='enter your username' />
                    </div>
                    <button className='login-btn'>login</button>
                </form>
               </div>
            </div>
        </div>
    
        <Footer/>
      
    </div>
  );
}
