import React, { useContext,useState } from 'react';
import './App.css'
import routers from './routes';
import { useRoutes } from 'react-router-dom';
import AutContext from './context/AuthContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfo, setUserInfo] = useState({});

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
