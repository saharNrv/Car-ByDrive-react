import React from 'react';
import './login.css'
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';

export default function Login() {
  return (
    <div>
        <Topbar/>
        <div className="login">
            <div>
               <div>
               <h2>Welcome My Drive</h2>
                <span>Login</span>
               </div>
               <div>
                <form >
                    <div>
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder='enter your username' />
                    </div>
                </form>
               </div>
            </div>
        </div>
    
        <Footer/>
      
    </div>
  );
}
