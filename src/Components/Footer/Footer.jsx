import React from 'react';
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
        <div className="container-grid">
            <div className="row-grid">
                <div className="col-12 col-xs-12 col-md-6">
                    <div className=''>
                    <img src="/image/logo-dark.png" alt="" className='w-[100px] dark:hidden' />
                     <img src="/image/logo-light.png" alt="" className='w-[100px] hidden dark:block' />
                     <p className='footer-info'>
                        Storkower Strasse 41Rheinland-Pfalz,56379, 
                        Germany
                    </p>
                    <div className='footer-social'>
                         <FaFacebook/>
                         <FaInstagram/>
                         <FaXTwitter/>
                         <FaLinkedin/>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-xs-12 col-md-6">
                    <div className='footer-list'>
                        <h2 className='font-bold text-xl'>Primary Pages</h2>
                        <ul className='footer-menu'>
                            <li>Car Dealer</li>
                            <li>Rents Cars</li>
                            <li>Services</li>
                            <li>Car Reviews List</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}
