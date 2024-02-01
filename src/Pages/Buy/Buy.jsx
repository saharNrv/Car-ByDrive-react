import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer';
import { MdDelete } from "react-icons/md";
import './buy.css'

export default function Buy() {
  return (
    <div>
        <Topbar/>
        <div className='buy'>
            <h1 className='buy-title'>Cart</h1>
            <div className="buy-wrapper">
                <div className="container-grid">
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
                            <tr className='tr-tbody'>
                                <td>
                                    <img src="/image/car-1.webp" alt="" />
                                </td>
                                <td>mercedes-bnz</td>
                                <td>12000000$</td>
                                <td>
                                    <span>
                                        <MdDelete className='text-red-500 text-2xl'/>
                                    </span>
                                </td>
                            </tr>
                            <tr className='tr-tbody'>
                                <td>
                                    <img src="/image/car-1.webp" alt="" />
                                </td>
                                <td>mercedes-bnz</td>
                                <td>12000000$</td>
                                <td>
                                    <span>
                                        <MdDelete className='text-red-500 text-2xl'/>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* responsive cart */}
                    <div className='buys-box'>
                        <div className="container-grid">

                        <div className="row-grid">
                            <div className="col-12">
                                <div className='buy-box'>
                                    <img src="/image/car-2.jpeg" alt="car image" className='car-box-img' />
                                    <h2 className='car-box-title'>BMW-X6</h2>
                                    <div className='w-full flex items-center justify-between'>
                                    <span>100000$</span>
                                    <button className='car-box-btn'><MdDelete/></button>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='buy-box'>
                                    <img src="/image/car-2.jpeg" alt="car image" className='car-box-img' />
                                    <h2 className='car-box-title'>BMW-X6</h2>
                                    <div className='w-full flex items-center justify-between'>
                                    <span>100000$</span>
                                    <button className='car-box-btn'><MdDelete/></button>

                                    </div>
                                </div>
                            </div>
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
