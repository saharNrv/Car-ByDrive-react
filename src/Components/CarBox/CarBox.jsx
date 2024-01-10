import React from 'react';
import './CarBox.css'

export default function CarBox() {
  return (
    <div className='col-xl-4'>
        <div className="carbox dark:shadow-3xl dark:border-none">
            <img src="/image/car-bg-1.jpeg" alt="" />
            <div className='flex items-center gap-5 my-4'>
                <div className='brand-wrap'>
                    <img src="/image/zlp.png" alt="car brand" className='brand-img' />
                </div>
                <div>
                    <h3 className='text-center mt-4 font-bold text-lg dark:text-white'>Alfa Romeo Giulia Sprint</h3>
                   <p className='text-gray-400 text-[14px]'>Automatic . AWD</p>
                </div>
            </div>
           
            <div className='flex items-center justify-between px-4 py-4'>
                <a href="#" className='bg-gray-200 py-2 px-4 rounded-md'>see more</a>
                <span className='dark:text-white text-2xl'>$350.000</span>
            </div>
        </div>

    </div>
  );
}
