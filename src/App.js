import React, { useContext,useEffect,useState } from 'react';
import './App.css'
import routers from './routes';
import { useRoutes } from 'react-router-dom';
import AutContext from './context/AuthContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const router=useRoutes(routers)

  const login=(userInfo,token)=>{
   
    setToken(token)
    setIsLoggedIn(true)
    setUserInfo(userInfo)
    localStorage.setItem('user',JSON.stringify({token}))

  }
  const logout=()=>{
    setToken(null);
    setUserInfo({});
    localStorage.removeItem("user");
  }
  useEffect(()=>{
    const isToken=localStorage.getItem('user');
    if(isToken){

    const localStorageData=JSON.parse(localStorage.getItem('user')).token
   

    
    // if(localStorageData){
      fetch(`http://localhost:3000/users/${localStorageData}`)
      .then(res=>res.json())
        .then(resualt=>{
          setIsLoggedIn(true)
          setUserInfo(resualt.username)

        })
      // }
    }
  },[login])

  return (
    < AutContext.Provider value={{
      isLoggedIn,
      token,
      userInfo,
      login,
      logout
    }}>
    
    {router}
    </AutContext.Provider>
  );
}
