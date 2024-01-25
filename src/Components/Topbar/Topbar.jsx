import React,{useEffect, useRef, useState} from 'react';
import useDarkTheme from '../../Hooks/useDarkTheme';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import './Topbar.css'

export default function Topbar() {
    const[theme,toggleTheme]=useDarkTheme()
    const menuRef=useRef()
    const[isShowCloseBtn,setIsShowCloseBtn]=useState(false)

    

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
      },[theme])

  return (
    <div className='topbar'>
 
      <div className="topbar-left">
        <img src="/image/logo-dark.png" alt="" className='w-[100px] dark:hidden' />
        <img src="/image/logo-light.png" alt="" className='w-[100px] hidden dark:block' />
      </div>
      <div className="topbar-right  " ref={menuRef}>
        <ul className='topbar-list'>
            <li>Home</li>
            <li>All Cars</li>
            <li>Contact Us</li>
            <li>Reviews</li>
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
        <div className='md:block hidden dark:text-white font-bold'>
        <a href="#" className='create-acount'>login/sign in</a>
        </div>

      </div>


      
    </div>
  );
}
