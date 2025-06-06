import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    },
// {
// path:'2',
// element:<Login></Login>
// },
    {
        path:'*',
        element: <h1>Error</h1>
        
    }
])