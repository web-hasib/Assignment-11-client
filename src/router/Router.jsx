import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../pages/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {
                index:true,
                loader:()=>fetch('http://localhost:3000/topBooks'),
                Component:Home
            },
            {
                path: 'login',
                Component: Login
            },{
                path:'register',
                Component:Register
            },
            {
                path:'profile',
             
                element: <PrivateRoute><Profile></Profile></PrivateRoute> 
            }
        ]
    },
// {
// path:'2',
// element:<Login></Login>
// },
    {
        path:'*',
        element: <Error/>
        
    }
])