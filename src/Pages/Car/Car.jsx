import React, { useEffect, useState } from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import './car.css'
import { useParams } from 'react-router-dom';

export default function Car() {

  const {shortName}=useParams()
  console.log(shortName);
  const[carSpecs,setCarSpecs]=useState([])
  
  useEffect(()=>{

    fetch(`http://localhost:3000/cars`)
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
         let carInfos= data.find(pro=>{
            return pro.shortName===shortName
          })
          setCarSpecs(carInfos)
        })
  },[])

  return (
    <div>
        <Topbar/>
      <div className='specs-car'>
         <div className="container-grid">
            <div className="row-grid">
                <div className="col-12 col-xs-12 col-md-6">
                    <img src={carSpecs.img} alt="car img" className='car-img' />
                </div>
                <div className="col-12 col-xs-12 col-md-6">
                    <div className="car-info">
                        <h2 className='car-info-title'>{carSpecs.name}</h2>
                        <p className='car-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, adipisci! Dicta quos, sunt non architecto voluptates enim odio sequi tempora atque libero quas harum eligendi ad. Non ipsum provident iste.</p>
                        <div className='car-pb'>
                            <p className='car-price'>${carSpecs.price}</p>
                            <button className='car-btn'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
      <Footer/>
    </div>
  );
}
