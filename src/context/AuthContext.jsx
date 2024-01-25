import { createContext } from "react";

const AutContext=createContext({
    isLoggedIn:false,
    token:null,
    userInfo:null,
    login:()=>{},
    logout:()=>{}
    
})

export default AutContext