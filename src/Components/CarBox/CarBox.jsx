import React from 'react';
import './CarBox.css'
import { Link } from 'react-router-dom';

export default function CarBox(props) {

   
  return (
    <div className='col-12 colxs-12 col-md-6 col-xl-4'>
        <div className="carbox">
            <img src={props.img} className='carbox-img' alt="car img" />
            <div className='carbox-info'>
                <div className='brand-wrap'>
                    <img src="/image/zlp.png" alt="car brand" className='brand-img' />
                </div>
                <div>
                    <h3 className='carbox-title'>{props.name}</h3>
                   <p className='text-gray-400 text-[14px]'>{props.gear} . AWD</p>
                </div>
            </div>
           
            <div className='carbox-price-wrap flex items-center justify-between px-4 py-4'>
                <Link to={`/cars/${props.shortName}`} className='carbox-btn'>see more</Link>
                <span className='carbox-price'>${props.price.toLocaleString()}</span>
            </div>
        </div>

    </div>
  );
}
