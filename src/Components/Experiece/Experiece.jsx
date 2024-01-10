import React from 'react';

export default function Experiece() {
  return (
    <div className='experice mt-[80px]'>
        <h2 className='experiece-title text-center text-2xl font-bold mb-8 tracking-widest dark:text-white'>Customer experience</h2>
       <div className="container-grid">
         <div className="row-grid">
            <div className="col-12 col-xs-12 col-md-6">
                <div className='h-[600px]  m-4 relative'>
                    
                    <img src="/image/exprience-2.jpeg" className='w-full h-full object-cover rounded-lg' alt="experince img" />
                    <div className=' mx-4  p-3 bg-gray-600 absolute top-[30px] rounded-2xl right-0 left-0 my-0 '>
                        <h3 className='experiece-box-title text-center text-xl font-bold text-white'>Feel the best experience with rental deals</h3>
                        <p className='experiece-box-desc my-4 text-white text-center leading-5'>The 2023 Volkswagen Jetta is an affordable European sedan that offers a spacious interior, unique styling, and engaging driving manners. It comes equipped with an efficient.</p>
                    </div>
                </div>

            </div>
            <div className="col-12 col-xs-12 col-md-6">
                <div className='h-[600px] m-4 relative'>
                    <img src="/image/experince-1.jpeg" className='w-full h-full object-cover rounded-lg' alt="experince img" />
                    <div className=' mx-4  p-3 bg-gray-700 absolute bottom-[30px] rounded-2xl right-0 left-0 my-0 '>
                        <h3 className='experiece-box-title text-center text-xl font-bold text-white'>Deal ratings on all listings near you</h3>
                        <p className='experiece-box-desc my-4 text-white text-center leading-5'>Standard features include Volkswagen’s Digital Cockpit, Apple CarPlay/Android Auto, forward collision warning with automatic emergency braking, blind-spot monitoring.</p>
                    </div>
                </div>
            </div>

         </div>
       </div>
    
    </div>
  );
}
