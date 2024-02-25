import React, { useState, useEffect } from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import { FaSearch } from "react-icons/fa";
import { PiTextColumnsBold } from "react-icons/pi";
import { PiRowsBold } from "react-icons/pi";
import CarBox from '../../Components/CarBox/CarBox';

import './allcars.css'
export default function AllCars() {
 
  const [allCars, setAllCars] = useState([])
  const [orderAllCars, setOrderAllCars] = useState([])
  const [changeCarType, setChangeCarType] = useState('row')
  const [searchVal,setSearchVal]=useState('')


  useEffect(() => {
    fetch('http://localhost:3000/allcars')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllCars(data)
        setOrderAllCars(data)
      })
  }, [])

  const changeHandler=(e)=>{
    setSearchVal(e.target.value)
    const filteredCars=allCars.filter(car=>car.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setOrderAllCars(filteredCars)

  }

  return (
    <>
      <Topbar />

      <div className='allcars'>
        <div className="container-grid">
          {/* menu bar */}
          <div className="menuBar">
            <div className='menuBar-right'>
              <div className='search-box'>
                <input 
                type="text"
                 placeholder='search here...' 
                 value={searchVal}
                 onChange={changeHandler}
                 />
                <FaSearch className='search-icon' />
              </div>
            </div>
            <div className='menuBar-left'>
              <div className={`typeClass ${changeCarType==='row'?'active':''} `} onClick={()=>setChangeCarType('row')}>
                <PiTextColumnsBold />
              </div>
              <div className={`typeClass ${changeCarType==='cloumn'?'active':''} `} onClick={()=>setChangeCarType('cloumn')}>
                <PiRowsBold />
              </div>
            </div>
          </div>
          {/* courses */}
          {
            changeCarType==='row'?(
              <>
          <div className="row-grid">
            {
              orderAllCars.map(car => (


                <CarBox {...car} />
              ))
            }
          </div>
              </>

            ):(
              <>
               {
              orderAllCars.map(car => (


          <div className="cloumn-car">
            <div className='cloumn'>
              <img src={car.img} alt="car" />
              <div className='info-box'>
                <h2>{car.name}</h2>
              <p>
                 {car.info}
              </p>
              <span>{car.price}</span>

              </div>
              <button>see more</button>
            </div>
          </div>
                
              ))
            }
              </>
            )
          }


        </div>

      </div>

      <Footer />
    </>
  );
}
