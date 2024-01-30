import Car from "./Pages/Car/Car"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"

const routers=[
    {path:'/',element:<Home/>},
    {path:'/car/mercedes',element:<Car/>},
    {path:'/login',element:<Login/>},
    {path:'/register',element:<Register/>},

]

export default routers