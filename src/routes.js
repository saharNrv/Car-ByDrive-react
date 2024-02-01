import Buy from "./Pages/Buy/Buy"
import Car from "./Pages/Car/Car"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"

const routers=[
    {path:'/',element:<Home/>},
    {path:'/cars/:shortName',element:<Car/>},
    {path:'/carBuy',element:<Buy/>},
    {path:'/login',element:<Login/>},
    {path:'/register',element:<Register/>},

]

export default routers