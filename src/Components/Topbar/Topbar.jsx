import React,{useContext, useEffect, useRef, useState} from 'react';
import useDarkTheme from '../../Hooks/useDarkTheme';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import AutContext from '../../context/AuthContext';
import { FaShoppingCart } from "react-icons/fa";

import './Topbar.css'
import { Link } from 'react-router-dom';

export default function Topbar() {


    const[theme,toggleTheme]=useDarkTheme()
    const menuRef=useRef()
    const[isShowCloseBtn,setIsShowCloseBtn]=useState(false)
    const[cartCount,setCartCount]=useState(0)

    const authContext=useContext(AutContext)

    const openMenu=()=>{
       menuRef.current.classList.toggle('menu-open')
       setIsShowCloseBtn(true)
    }

    useEffect(()=>{
        if(theme==='dark'){
          document.body.classList.add('dark')
      
        }else{
          document.body.classList.remove('dark')
      
        }

        fetch('http://localhost:3000/buyCar')
             .then(res=>res.json())
             .then(data=>setCartCount(data))
      },[theme])
     

  return (
    <div className='topbar'>
 
      <div className="topbar-left">
        <img src="/image/logo-dark.png" alt="" className='w-[100px] dark:hidden' />
        <img src="/image/logo-light.png" alt="" className='w-[100px] hidden dark:block' />
      </div>
      <div className="topbar-right  " ref={menuRef}>
        <ul className='topbar-list'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/allcars'>All Cars</Link>
            </li>
            <li>
              <Link to='/register'>Contact Us</Link>
            </li>
            <li>Reviews</li>
            <li className='cart-box'>
              <Link to='/carBuy'>
              <FaShoppingCart/>
              <span className='cart-num'>{cartCount.length}</span>
              </Link>
            </li>
            <li className='md:hidden block'><a href="#" className='create-acount'>login/sign in</a></li>
        </ul>

      </div>
     
      <div className='menu-humburger ' onClick={openMenu}>
        <span className='menu-humburger-item'></span>
      </div>
      <div className='change-theme'>

        <button className='theme-btn'
        onClick={toggleTheme}
        >
         {
            theme==='light'?(
                <MdOutlineDarkMode className='text-2xl'/>
                
                ):(
                    <MdOutlineLightMode className='text-2xl dark:text-white'/>
            )
         }
        </button>
        {
          authContext.isLoggedIn?(
<div className='md:block hidden dark:text-white font-bold'>
        <span className='create-acount'>{authContext.userInfo}</span>
        </div>
          ):(
            <div className='md:block hidden dark:text-white font-bold'>
        <Link to="/register" className='create-acount'>login/sign in</Link>
        </div>
          )
        }
        

      </div>


      
    </div>
  );
}
