import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';

export default function AboutCar() {
    return (
        <div className='aboutcar mt-[100px]'>
            <div className="container-grid">
                <HeaderSection title={'More about world’s best cars'} />

                <div className="row-grid">
                    <div className="col-12 col-xs-12 col-md-6 col-xl-7">
                        <a href="#">
                            <div className=' h-[500px] m-2 relative rounded-md overflow-hidden'>
                                <img src="/image/aboutcar-2.jpeg" alt="" className='w-[100%] h-full object-cover' />
                                <div className='aboutcover absolute bg-black/30 w-full h-full top-0'></div>
                                <div className='about-info-car absolute bottom-[20px] mx-4'>
                                    <p className='text-gray-400'>18 December 2023</p>
                                    <h3 className='my-2 text-white font-bold text-2xl'>Ford Focus ST</h3>
                                    <p className='text-white leading-normal'>A big-hearted engine in an otherwise sensible car. The perfect seven-tenths hot hatch launched in 2023.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-xs-12 col-md-6 col-xl-5">
                        
                            <div className=''>
                                <a href="#">
                                    <div className=' h-[250px] m-2 relative rounded-md overflow-hidden'>
                                        <img src="/image/aboutcar-6.jpeg" alt="" className='w-[100%] h-full object-cover' />
                                        <div className='aboutcover absolute bg-black/30 w-full h-full top-0'></div>
                                        <div className='about-info-car absolute bottom-[20px] mx-4'>
                                            <p className='text-gray-400'>18 December 2023</p>
                                            <h3 className='my-2 text-white font-bold text-2xl'>Ford Focus ST</h3>
                                            <p className='text-white leading-normal'>A big-hearted engine in an otherwise sensible car. The perfect seven-tenths hot hatch launched in 2023.</p>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className=''>
                            <a href="#">
                                <div className=' h-[250px] m-2 relative rounded-md overflow-hidden'>
                                    <img src="/image/aboutcar-1.jpeg" alt="" className='w-[100%] h-full object-cover' />
                                    <div className='aboutcover absolute bg-black/30 w-full h-full top-0'></div>
                                    <div className='about-info-car absolute bottom-[20px] mx-4'>
                                        <p className='text-gray-400'>18 December 2023</p>
                                        <h3 className='my-2 text-white font-bold text-2xl'>Ford Focus ST</h3>
                                        <p className='text-white leading-normal'>A big-hearted engine in an otherwise sensible car. The perfect seven-tenths hot hatch launched in 2023.</p>
                                    </div>
                                </div>
                            </a>
                            </div>
                        


                    </div>
                </div>
            </div>

        </div>
    );
}
