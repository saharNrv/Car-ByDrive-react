import React, { useEffect, useState } from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import { MdDelete } from "react-icons/md";
import './buy.css'

export default function Buy() {

    const[buyCar,setBuyCar]=useState([])
    const[carID,setCarID]=useState()
    useEffect(()=>{
        getAllCar()
    },[])
    
   const getAllCar=()=>{
    fetch('http://localhost:3000/buyCar')
    .then(res=>res.json())
    .then(data=>setBuyCar(data))
   }

    const deleteHandler=(info)=>{
        
        console.log(info.id);
        fetch(`http://localhost:3000/buyCar/${info.id}`,{
            method:'DELETE'
        }).then(res=>res.json())
          .then(data=>{
            getAllCar()
          })
         
    }

  return (
    <div>
        <Topbar/>
        <div className='buy'>
            <div className="buy-wrapper">
                <div className="container-grid">
            <h1 className='buy-title'>Cart</h1>
                    {
                        buyCar.length!==0?(
                            <table className='table'>
                            <thead>
                                <tr className='tr-thead'>
                                    <th>Cover</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyCar.map(info=>(
                                <tr className='tr-tbody' key={info.id}>
                                    <td>
                                        <img src={info.img} alt="" />
                                    </td>
                                    <td>{info.name}</td>
                                    <td>${info.price.toLocaleString()}</td>
                                    <td>
                                        <button onClick={()=>{deleteHandler(info)}}>
                                            <MdDelete className='text-red-500 text-2xl'/>
                                        </button>
                                    </td>
                                </tr>
    
                                    ))
                                }
                              
                            </tbody>
                        </table>
                        ):(
                            <div className='alert-box-desc'>No Product</div>
                        )
                    }
                   
                    {/* responsive cart */}
                    <div className='buys-box'>
                        <div className="container-grid">
                            {
                                buyCar.length!==0?(
                                    <div className="row-grid">
                                    {
                                        buyCar.map(info=>(
                                    <div className="col-12" key={info.id}>
                                        <div className='buy-box'>
                                            <img src={info.img} alt="car image" className='car-box-img' />
                                            <h2 className='car-box-title'>{info.name}</h2>
                                            <div className='w-full flex items-center justify-between'>
                                            <span>${info.price.toLocaleString()}</span>
                                            <button className='car-box-btn' onClick={()=>{deleteHandler(info)}}><MdDelete/></button>
        
                                            </div>
                                        </div>
                                    </div>
        
                                        ))
                                    }
                                   
                                </div>
                                ):(<div className='alert-box'>No Product</div>)
                            }

                      
                        </div>

                    </div>
                </div>
            </div>
        </div>

      <Footer/>
    </div>
  );
}
