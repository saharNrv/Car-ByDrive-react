import { createContext } from "react";

const AutContext=createContext({
    isLoggedIn:false,
    token:null,
    login:()=>{},
    logout:()=>{}
    
})

export default AutContext