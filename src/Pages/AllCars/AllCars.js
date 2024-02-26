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
  const [status, setStatus] = useState('default')
  const [statusTitle, setStatusTitle] = useState('all')
  const [searchVal, setSearchVal] = useState('')


  useEffect(() => {
    fetch('http://localhost:3000/allcars')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllCars(data)
        setOrderAllCars(data)
      })
  }, [])

  useEffect(() => {
    switch (status) {
      case 'red': {
        const redFilter = allCars.filter(car => car.color === 'red')
        console.log(redFilter);
        setOrderAllCars(redFilter)
        break
      }
      case 'blue': {
        const blueFilter = allCars.filter(car => car.color === 'blue')
        setOrderAllCars(blueFilter)
        break
      }
      case 'black': {
        const blackFilter = allCars.filter(car => car.color === 'black')
        setOrderAllCars(blackFilter)
        break
      }
      case 'expensive': {
        const redFilter = allCars.filter(car => car.price > 230000000)
        setOrderAllCars(redFilter)
        break
      }
      default: {
        setOrderAllCars(allCars)
      }
    }
  }, [status])

  const changeHandler = (e) => {
    setSearchVal(e.target.value)
    const filteredCars = allCars.filter(car => car.name.toLowerCase().includes(e.target.value.toLowerCase()))
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
              <div className={`typeClass ${changeCarType === 'row' ? 'active' : ''} `} onClick={() => setChangeCarType('row')}>
                <PiTextColumnsBold />
              </div>
              <div className={`typeClass ${changeCarType === 'cloumn' ? 'active' : ''} `} onClick={() => setChangeCarType('cloumn')}>
                <PiRowsBold />
              </div>
              <div className='allcars-top-bar__selection'>
                <span className='allcars-title'>{statusTitle}</span>
                <ul className='allcars-top-bar__selection-list'>
                  <li className='allcars-top-bar__selection-item allcars-top-bar__selection-item--active'>All</li>
                  <li className='allcars-top-bar__selection-item ' onClick={(event) => {
                    setStatus('red')
                    setStatusTitle(event.target.textContent)
                  }}>red</li>
                  <li className='allcars-top-bar__selection-item ' onClick={(event) => {
                    setStatus('blue')
                    setStatusTitle(event.target.textContent)
                  }}>blue</li>
                  <li className='allcars-top-bar__selection-item ' onClick={(event) => {
                    setStatus('black')
                    setStatusTitle(event.target.textContent)
                  }}>black</li>
                  <li className='allcars-top-bar__selection-item ' onClick={(event) => {
                    setStatus('expensive')
                    setStatusTitle(event.target.textContent)
                  }}>expensive</li>

                </ul>
              </div>
            </div>
          </div>
          {/* courses */}
          {
            changeCarType === 'row' ? (
              <>
                <div className="row-grid">
                  {
                    orderAllCars.map(car => (


                      <CarBox {...car} />
                    ))
                  }
                </div>
              </>

            ) : (
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
