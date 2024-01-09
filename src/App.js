import React from 'react';
import './App.css'
import routers from './routes';
import { useRoutes } from 'react-router-dom';

export default function App() {

  const router=useRoutes(routers)
  return (
    <>
    
    {router}
    </>
  );
}
