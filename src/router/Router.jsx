import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../pages/Error";
import AllBooks from "../pages/AllBooks";
import Loading from './../pages/Loading';
import BookDetails from "../pages/bookDetails";
import AddBook from "../pages/AddBook";
import MyBooks from "../pages/MyBooks";
import EditBook from "../pages/EditBook";
import About from "../pages/About";

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
            },{
                path:'allBooks',
                loader:()=>fetch('http://localhost:3000/books'),
                hydrateFallbackElement:<Loading></Loading>,
                element:<AllBooks></AllBooks>
            },
            {
                path:'books/:id',
                loader:({params})=>fetch(`http://localhost:3000/books/${params.id}`),
                element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>  
            },
            {
                path:'addBook',
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:'myBooks',
                
               
                element:<PrivateRoute><MyBooks></MyBooks></PrivateRoute>
            },
            {
                path:'/editBook/:id',
                element:<PrivateRoute><EditBook></EditBook></PrivateRoute>
            },
            {
                path:'about',
                Component: About
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