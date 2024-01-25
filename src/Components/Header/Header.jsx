import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import { IoSearch } from "react-icons/io5";
import AutContext from '../../context/AuthContext';

export default function Header() {



  return (
    <div className='header pt-[80px]'>
      
      <img src="/image/car-bg-3-light.jpeg" alt=""  className='header-img dark:hidden'/>
      <img src="/image/car-bg-4-dark.jpg" alt=""  className='header-img hidden dark:block'/>
      <div className='header-cover dark:bg-gradient-to-b from-slate-900'></div>

       <div className='header-info '>
        <div >

        <h1 className='headet-title text-[50px] font-black dark:text-white'>The easiest way to buy a car</h1>
        <p className='header-desc text-center my-4 tracking-widest dark:text-slate-400'>Drive your dream car down the stylish streets</p>
        </div>
        <div className='header-searchBox'>
            <input type="text" placeholder='serach...' className='header-input' />
            <button className='header-search-btn'>
                <IoSearch className='text-2xl'/>
            </button>
        </div>
        
        </div> 
      
    </div>
  );
}
