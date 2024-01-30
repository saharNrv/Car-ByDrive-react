import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import './car.css'

export default function Car() {
  return (
    <div>
        <Topbar/>
      <div className='specs-car'>
         <div className="container-grid">
            <div className="row-grid">
                <div className="col-12 col-xs-12 col-md-6">
                    <img src="/image/car-1.webp" alt="car img" className='car-img' />
                </div>
                <div className="col-12 col-xs-12 col-md-6">
                    <div className="car-info">
                        <h2 className='car-info-title'>Mercedes</h2>
                        <p className='car-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, adipisci! Dicta quos, sunt non architecto voluptates enim odio sequi tempora atque libero quas harum eligendi ad. Non ipsum provident iste.</p>
                        <div className='car-pb'>
                            <p className='car-price'>100000$</p>
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
