import React from 'react';
import CarBox from '../CarBox/CarBox';
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Cars() {
  return (
    <div className='cars mt-[80px]'>
        <HeaderSection title={'Various luxury cars'}/>
        <div className="container-grid">
           <div className="row-grid">

            <CarBox/>
            <CarBox/>
            <CarBox/>
            <CarBox/>
            <CarBox/>
            <CarBox/>
            
           </div>

        </div>
      
    </div>
  );
}
