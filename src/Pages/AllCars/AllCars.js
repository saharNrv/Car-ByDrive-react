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

  useEffect(() => {
    fetch('http://localhost:3000/allcars')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllCars(data)
      })
  }, [])

  return (
    <>
      <Topbar />

      <div className='allcars'>
        <div className="container-grid">
          {/* menu bar */}
          <div className="menuBar">
            <div className='menuBar-right'>
              <div className='search-box'>
                <input type="text" placeholder='search here...' />
                <FaSearch className='search-icon' />
              </div>
            </div>
            <div className='menuBar-left'>
              <span className='typeClass'>
                <PiTextColumnsBold />
              </span>
              <span className=' typeClass active'>
                <PiRowsBold />
              </span>
            </div>
          </div>
          {/* courses */}
          <div className="row-grid">
            {
              allCars.map(car => (


                <CarBox {...car} />
              ))
            }
          </div>

          <div className="cloumn-car">
            <div className='cloumn'>
              <img src="/image/b-car-1.jpeg" alt="car" />
              <div className='info-box'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eaque!
              </p>
              <span>15400000</span>

              </div>
              <button>see more</button>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}
