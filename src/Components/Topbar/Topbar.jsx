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
    <div className='topbar bg-with dark:bg-slate-900 h-20 flex items-center justify-between px-10'>
 
      <div className="topbar-left">
        <img src="/image/logo-dark.png" alt="" className='w-[100px] dark:hidden' />
        <img src="/image/logo-light.png" alt="" className='w-[100px] hidden dark:block' />
      </div>
      <div className="topbar-right  " ref={menuRef}>
        <ul className='topbar-list flex items-center gap-10 *:cursor-pointer dark:text-white dark:bg-slate-900/[.6] dark:backdrop-blur-lg'>
            <li>Home</li>
            <li>All Cars</li>
            <li>Contact Us</li>
            <li>Reviews</li>
        </ul>

      </div>
     
      <div className='menu-humburger ' onClick={openMenu}>
        <span className='menu-humburger-item'></span>
      </div>
      <div className='change-theme'>

        <button className='w-[50px] h-[50px] flex items-center justify-center rounded-[50%] shadow shadow-gray-200'
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
       

      </div>


      
    </div>
  );
}
