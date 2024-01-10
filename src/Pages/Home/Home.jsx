import React from 'react';
import './Home'
import Topbar from '../../Components/Topbar/Topbar';
import Header from '../../Components/Header/Header';
import Experiece from '../../Components/Experiece/Experiece';
import Cars from '../../Components/Cars/Cars';

export default function Home() {
  return (
    <div>
    <Topbar/>
    <Header/>
    <Experiece/>
    <Cars/>
 
    </div>
  );
}
