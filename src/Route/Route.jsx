import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../component/CheckOut/CheckOut";
import CourseDetails from "../component/Details/CourseDetails";
import ErrorPage from "../component/Error/ErrorPage";
import Blog from "../component/Pages/Blog/Blog";
import Courses from "../component/Pages/Courses/Courses";
import FAQ from "../component/Pages/FAQ/FAQ";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import Register from "../component/Pages/Register/Register";


import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
              
            },
            {
                path:'/home',
                element:<Home></Home>
              
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('https://assign10-server.vercel.app/courses')
              
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
              
            },
            {
                path:'/blog',
                element:
                    <Blog></Blog>
               
              
            },
            {
                path:'/login',
                element:<Login></Login>
              
            },
            {
                path:'/register',
                element:<Register></Register>
              
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>fetch(`https://assign10-server.vercel.app/course/${params.id}`)
              
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params})=>fetch(`https://assign10-server.vercel.app/checkout/${params.id}`)
              
            },
        ]


    }
])

export default router;