import React, { useEffect, useState } from 'react';
import CarBox from '../CarBox/CarBox';
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Cars() {

  const[cars,setCars]=useState([])

  useEffect(()=>{

    fetch(`http://localhost:3000/cars`)
         .then(res=>res.json())
         .then(data=>setCars(data))
      
     
  },[])


  return (
    <div className='cars mt-[80px]'>
        <HeaderSection title={'Various luxury cars'}/>
        <div className="container-grid">
           <div className="row-grid">
             
             {
              cars.map(car=>(
                <CarBox {...car}/>
              ))
             }

           
            
           </div>

        </div>
      
    </div>
  );
}
